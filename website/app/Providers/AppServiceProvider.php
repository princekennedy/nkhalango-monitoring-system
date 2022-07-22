<?php

namespace App\Providers;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\ServiceProvider;
use League\Glide\Server;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->registerGlide();
    }

    protected function registerGlide()
    {
        $this->app->bind(Server::class, function ($app) {
            return Server::create([
                'source' => Storage::getDriver(),
                'cache' => Storage::getDriver(),
                'cache_folder' => '.glide-cache',
                'base_url' => 'img',
            ]);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        JsonResource::withoutWrapping();

    }
}
