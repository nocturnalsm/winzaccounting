<?php

namespace App\Services;

use App\Services\BaseService;
use App\Repositories\NotificationRepository;
use App\Services\IntegrationService;
use Illuminate\Http\Request;
use App\Lists\PaginatedList;

class NotificationService extends BaseService
{
    public function __construct(NotificationRepository $notification, PaginatedList $list)
    {
        $this->repository = $notification;
        $this->list = $list;
    }    

    public function create(Request $request)
    {
        if (isset($request->send_email) && $request->send_email){            
            $integration = app(IntegrationService::class);
            $credentials = $integration->getCredentials('email-notifications', $request);
            $request->merge([
                "send_email" => $credentials["credentials"]
            ]);
        }
        return parent::create($request);
    }

    public function validateUsing($params, $id = "")
    {
        if (!$id){
            return [            
                "title" => 'required',
                "content" => 'required',
                "users" => [
                    'array',
                    function($attr, $value, $fail) use ($params) {
                        if ($params["sendAll"] != true && count($value) == 0){
                            $fail("Select users to be notified");
                        }
                    }
                ]
            ];
        }
        else {
            return [];
        }
    }

    public function getPreview($request)
    {
        $request->merge([
            'limit' => 5,
            'sort' => 'created_at',
            'order' => 'desc'
        ]);
        $list = $this->getList($request);
        $items = $list->items();
        $unread = $this->repository->getUnread();
        return [
            "data" => $items,
            "unread" => $unread
        ];
    }
}