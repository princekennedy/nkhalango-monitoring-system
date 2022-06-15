<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTreeSpeciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tree_species', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("user_id");

            $table->string("name");
            $table->text("description")->nullable();
            $table->json("properties")->nullable();

            $table->unsignedBigInteger("status_id");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tree_species');
    }
}