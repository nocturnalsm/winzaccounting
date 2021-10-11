<?php

namespace App\Repositories;

use App\Repositories\BaseRepository;
use App\Models\Media;

class MediaRepository extends BaseRepository
{
    private $media;

    public function __construct()
    {
        $this->media = new Media;
    }
    public function get($filename, $isThumbnail)
    {

    }
}
