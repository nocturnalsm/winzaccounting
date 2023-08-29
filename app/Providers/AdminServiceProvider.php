<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Foundation\Application;
use App\Services\Admin\UserService;
use App\Services\Admin\RoleService;
use App\Services\Admin\PermissionService;
use App\Repositories\Admin\UserRepository;
use App\Repositories\Admin\RoleRepository;
use App\Repositories\Admin\PermissionRepository;
use App\Lists\Admin\User;
use App\Lists\Admin\Role;
use App\Lists\Admin\Permission;


class AdminServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->app->bind(UserService::class, function (Application $app) {
            return new UserService($app->make(UserRepository::class), $app->make(User::class));
        });

        $this->app->bind(RoleService::class, function (Application $app) {
            return new RoleService($app->make(RoleRepository::class), $app->make(Role::class));
        });

        $this->app->bind(PermissionService::class, function (Application $app) {
            return new PermissionService($app->make(PermissionRepository::class), $app->make(Permission::class));
        });
    }
}


