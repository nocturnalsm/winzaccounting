<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class ImageService
{
    public function createFromUrl($url, $path)
    {
        // check if url is from our own site, if it is, just copy the image
        $url = trim($url, "/");
        $storageUrl = url("storage");
        $check = strpos($url, $storageUrl);

        $extension = explode(".", $url);
        $filename = Date("YmdHis") .rand(1000,9999) .".{$extension[count($extension) - 1]}";

        if ($check === false){
            $client = new \GuzzleHttp\Client();
            $response = $client->request('GET', $url, ['stream' => true]);
            $body = $response->getBody()->getContents();
            Storage::put("public/images/" .trim($path,"/") ."/" .$filename, $body);
        }
        else {
            $oldFile = str_replace($storageUrl, "", $url);
            Storage::copy("public/" .trim($oldFile, "/"), "public/images/" .trim($path,"/") ."/" .$filename);
        }
        return $filename;
    }

    public function create($file, $folderName)
    {
        $extension = $file->extension();
        $filename = Date("YmdHis") .strval(rand(1000,9999)) .".{$extension}";
        $file->storeAs("public/images/" .trim($folderName, "/"), $filename);
        return $filename;
    }

    public function getUrl($filename)
    {
        if (Storage::exists('public/images/' . $filename)){
            return url(Storage::url('public/images/' . $filename));
        }
        else {
            return false;
        }
    }
}