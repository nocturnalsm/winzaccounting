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
    
    public function save($request, $folderName)
    {
        if ($request->file){
            $path = $request->file('file')->store($folderName);    
            $data = [
                "filename" => $path,
                "company_id" => $request->company_id
            ];        
            $media = Media::create($data);
            return $media;
        }
        return false;
    }
    public function sync($medias, $model)
    {
        $oldMedia = $model->media()->get();
        foreach ($oldMedia as $media){
            $founded = false;
            for($i=0;$i<count($medias);$i++){
                if ($media->id == $medias[$i]["id"]){
                    $founded = true;
                }
            }
            if ($founded === false){
                $media->delete();
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
