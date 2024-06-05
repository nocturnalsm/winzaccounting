<?php

namespace App\Repositories\Admin;

use App\Repositories\BaseRepository;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Gate;
use App\Models\Company;
use App\Models\Permission;

use DB;

class UserRepository extends BaseRepository
{

    public function __construct(User $user)
    {
        $this->data = $user;
    }

    public function create($params)
    {
        return DB::transaction(function() use ($params){
            if (!isset($params["password"])){
                $params["password"] =Str::random(10);
            }
            $params["password"] = Hash::make($params["password"]);
            $user = parent::create($params);
            if (isset($params["roles"])){
                $user->syncRoles($params["roles"]);
            }
            if (isset($params["companies"])){
                $user->companies()->attach($params['companies']);
            }
            return $user;
        });
    }

    public function getById(String $id)
    {
        return $this->data
                    ->whereId($id)
                    ->with([
                        'roles',
                        'status:id,status,label,color'
                    ])
                    ->firstOrFail();
    }

    public function update($id, $params)
    {
        return DB::transaction(function() use ($params, $id){
            if (empty($params["password"])){
                unset($params["password"]);
            }
            else {
                $params["password"] = Hash::make($params["password"]);
            }
            $user = parent::update($id, $params);
            if (isset($params["roles"])){
                $user->syncRoles($params["roles"]);
            }
            if (isset($params["companies"])){
                $user->companies()->sync($params['companies']);
            }
            return $user;
        });
    }

    public function getUserBySocial($provider, $params)
    {
        $where = ["email" => $params["email"]];
        $values = Array();
        if ($provider === 'google'){
            $values = [
                "google_id" => $params["sub"],
                "name" => $params["name"],
                "avatar" => $params["picture"]
            ];
        }
        else if ($provider === 'facebook'){
            $values = [
                "facebook_id" => $params["id"],
                "name" => $params["name"],
                "avatar" => $params["picture"]["data"]["url"] ?? NULL
            ];
        }
        else {
            abort(422, "Provider is not supported");

        }
        return $this->data->updateOrCreate($where, $values);
    }

    public function checkPermission($params = [])
    {
        $user = auth()->currentUser();
        if ($user->hasRole('Super Admin')){
            $permissions = Permission::all()->pluck("name");
        }
        else {
            $permissions = $user->getAllPermissions()->pluck("name");
        }
        if (count($params) > 0){
            $return = Array();
            foreach ($permissions as $perm){
                if (in_array($perm, $params)){
                    $return[] = $perm;
                }
            }
            return $return;
        }
        return $permissions;
    }

    public function getTeam($user, $params)
    {

        $data = $this->data;
        if (isset($params["dashboard"]) && $params["dashboard"] == 'true'){
            $data = $data->whereDisplayOnDashboard(true)
                        ->inRandomOrder();
        }
        else {
            $data = $data->orderBy('calendly_id', 'desc')
                         ->orderBy('name', 'asc');
        }
        $data = $data->select("users.id", "users.email", "users.name",
                              "users.title", "users.google_avatar",
                              "avatar", "agent_id","fub_id", "office_id", "calendly_id");

        $user = auth()->currentUser();
        $data = $data->whereIn('office_id', $user->company->offices()->pluck('id'));

        if (isset($params["limit"]) && $params["limit"] > 0){
            $data = $data->take($params["limit"]);
        }

        if (isset($params["sort"])){
            $data = $data->orderBy($params["sort"]);
        }

        if (isset($params["filters"])){
            $filters = json_decode($params["filters"]);
            foreach ($filters as $key => $filter){
                $data = $data->where($key, $filter);
            }
        }

        $data = $data->with(['office']);

        return $data->get()->map(function ($item) {
            $item->office_name = $item->office->name;
            unset($item->office);
            return $item;
        });



    }

    public function search($params)
    {
        $data = $this->data->search($params["q"]);

        return $data->query(function($query) use ($params){
                    $user = auth()->currentUser();
                    $query->whereHas('office', function($query) use ($user){
                        $query->whereCompanyId($user->company->id);
                    })
                    ->with('office:id,name');
                })
                ->get();
    }
}
