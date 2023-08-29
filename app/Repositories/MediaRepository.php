<?php

namespace App\Repositories;

use App\Repositories\BaseRepository;
use App\Models\Media;
use Storage;

class MediaRepository extends BaseRepository
{
    protected $data;

    private const IMAGE_HANDLERS = [
        'image/jpeg' => [
            'load' => 'imagecreatefromjpeg',
            'save' => 'imagejpeg',
            'quality' => 100
        ],
        'image/png' => [
            'load' => 'imagecreatefrompng',
            'save' => 'imagepng',
            'quality' => 0
        ],
        'image/gif' => [
            'load' => 'imagecreatefromgif',
            'save' => 'imagegif'
        ]
    ];
    private $thumbnailSize = 240;

    public function __construct()
    {
        $this->data = new Media;
    }

    public function save($request, $folderName)
    {
        if ($request->file){
            $path = $request->file('file')->store($folderName);
            $mimeType = Storage::mimeType($path);
            if (strpos($mimeType, 'image/') === 0){
                $this->createThumbnail($path, $mimeType, $this->thumbnailSize);
            }
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
    public function delete($id)
    {
        $file = Media::findOrFail($id);
        if ($file){
            parent::delete($id);
            Storage::delete($file->filename);
            Storage::delete($file->filename ."-thumbnail");
            return true;
        }
    }
        /**
     * @param $src - a valid file location
     * @param $dest - a valid file target
     * @param $targetWidth - desired output width
     * @param $targetHeight - desired output height or null
     */
    public function createThumbnail($path, $type, $targetWidth, $targetHeight = null) {

        // 1. Load the image from the given $src
        // - see if the file actually exists
        // - check if it's of a valid image type
        // - load the image resource

        // get the type of the image
        // we need the type to determine the correct loader

        if (!$type) {
            return null;
        }
        $fullPath = Storage::path($path);
        // load the image with the correct loader
        $image = call_user_func(self::IMAGE_HANDLERS[$type]['load'], $fullPath);

        // no image found at supplied location -> exit
        if (!$image) {
            return null;
        }


        // 2. Create a thumbnail and resize the loaded $image
        // - get the image dimensions
        // - define the output size appropriately
        // - create a thumbnail based on that size
        // - set alpha transparency for GIFs and PNGs
        // - draw the final thumbnail

        // get original image width and height
        $width = imagesx($image);
        $height = imagesy($image);

        // maintain aspect ratio when no height set
        if ($targetHeight == null) {

            // get width to height ratio
            $ratio = $width / $height;

            // if is portrait
            // use ratio to scale height to fit in square
            if ($width > $height) {
                $targetHeight = floor($targetWidth / $ratio);
            }
            // if is landscape
            // use ratio to scale width to fit in square
            else {
                $targetHeight = $targetWidth;
                $targetWidth = floor($targetWidth * $ratio);
            }
        }

        // create duplicate image based on calculated target size
        $thumbnail = imagecreatetruecolor($targetWidth, $targetHeight);

        // set transparency options for GIFs and PNGs
        if ($type == 'image/gif' || $type == 'image/png') {

            // make image transparent
            imagecolortransparent(
                $thumbnail,
                imagecolorallocate($thumbnail, 0, 0, 0)
            );

            // additional settings for PNGs
            if ($type == 'image/png') {
                imagealphablending($thumbnail, false);
                imagesavealpha($thumbnail, true);
            }
        }

        // copy entire source image to duplicate image and resize
        imagecopyresampled(
            $thumbnail,
            $image,
            0, 0, 0, 0,
            $targetWidth, $targetHeight,
            $width, $height
        );


        // 3. Save the $thumbnail to disk
        // - call the correct save method
        // - set the correct quality level

        // save the duplicate version of the image to disk
        return call_user_func(
            self::IMAGE_HANDLERS[$type]['save'],
            $thumbnail,
            $fullPath ."-thumbnail",
            self::IMAGE_HANDLERS[$type]['quality']
        );
    }
}
