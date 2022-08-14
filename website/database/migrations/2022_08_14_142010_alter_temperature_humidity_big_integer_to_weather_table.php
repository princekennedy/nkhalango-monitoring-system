<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterTemperatureHumidityBigIntegerToWeatherTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('weather', function (Blueprint $table) {
            $table->unsignedBigInteger('temperature')
                ->nullable(false)
                ->change();
            $table->unsignedBigInteger('humidity')
                ->nullable(false)
                ->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('weather', function (Blueprint $table) {
            $table->decimal("temperature", 3, 2)->change();
            $table->decimal("humidity", 3, 2)->change();
        });
    }
}