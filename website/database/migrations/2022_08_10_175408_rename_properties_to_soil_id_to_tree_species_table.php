<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenamePropertiesToSoilIdToTreeSpeciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tree_species', function (Blueprint $table) {
            $table->dropColumn("properties");
            $table->unsignedBigInteger('soil_id')
                ->after("description");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tree_species', function (Blueprint $table) {
            $table->dropColumn('soil_id');
            $table->json("properties")->nullable();
        });
    }
}