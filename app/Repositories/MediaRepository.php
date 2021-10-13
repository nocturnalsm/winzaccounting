<?php

namespace App\Repositories;

use App\Repositories\BaseRepository;
use App\Models\Media;

class MediaRepository extends BaseRepository
{
    protected $data;

    public function __construct()
    {
        $this->data = new Media;
    }
    
    public function save($request, $folderName, $model)
    {
        if ($request->file){
            $path = $request->file('file')->store($folderName);    
            $data = [
                "filename" => $path,
                "company_id" => $request->company_id
            ];        
            if ($model){
                $media = $model->media()->create($data);
            }
            else {
                $media = $media->fill($data)->save();
            }
            return $media;
        }
        return false;
    }
    public function sync($medias, $model)
    {
        $oldMedia = $model->media();
        $deassociated = Array();
        foreach ($oldMedia as $media){
            $founded = false;
            for($i=0;$i<count($medias);$i++){
                if ($media["id"] == $medias[$i]->id){
                    $founded = true;
                }
            }
            if ($founded === false){
                $media->model()->dissociate()->save();
            }
        }
        foreach ($medias as $media){
            $theMedia = Media::find($media["id"]);
            if ($theMedia){
                $theMedia->model()->associate($model)->save();
            }
        }        
    }
}
