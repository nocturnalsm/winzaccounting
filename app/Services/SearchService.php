<?php

namespace App\Services;

use Illuminate\Http\Request;
use Meilisearch\Client;
use Meilisearch\Contracts\SearchQuery;
use Laravel\Scout\Engines\MeilisearchEngine;
use Laravel\Scout\Builder;

class SearchService
{
    protected $meilisearch;

    public function __construct(MeilisearchEngine $meilisearch)
    {
        $this->meilisearch = $meilisearch;
    }

    public function query(Request $request)
    {
        $request->validate([
            'q' => 'required'
        ]);

        $data = $this->meilisearch->multiSearch([
            (new SearchQuery())
                ->setIndexUid('items')
                ->setQuery($request->q),
            (new SearchQuery())
                ->setIndexUid('users')
                ->setQuery($request->q),
            (new SearchQuery())
                ->setIndexUid('integrations')
                ->setQuery($request->q)
        ]);
        $results = Array();
        foreach ($data["results"] as $result){
            $hits = $result["hits"];
            $ids = Array();
            foreach ($hits as $hit){
                $ids[] = $hit["id"];
            }
            $indexUid = $result["indexUid"];
            if ($indexUid == 'items'){
                $items = \App\Models\Item::whereIn('id', $ids)
                            ->select("id", "title", "description", "icon", "category_id", "action_url", "item_type_id")
                            ->with([
                                'category:id,title,icon',
                                'itemType:id,name'
                            ])
                            ->orderBy('title')
                            ->get();
                $results["items"] = $items;
            }
            else if ($indexUid == 'users'){
                $user = auth()->currentUser();
                $users = \App\Models\User::whereIn('id', $ids)
                            ->whereHas('office', function($query) use ($user){
                                $query->whereCompanyId($user->company->id);
                            })
                            ->orderBy('name')
                            ->with('office:id,name')
                            ->get();
                $results["users"] = $users;
            }
            else if ($indexUid == 'integrations'){
                $integrations = \App\Models\Integration::whereIn('id', $ids)
                                    ->with('category:id,title')
                                    ->orderBy('title')
                                    ->get();
                $results["integrations"] = $integrations;
            }
        }
        return $results;
    }

}
