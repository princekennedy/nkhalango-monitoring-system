<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RenameUserIdToSoilIdToTreeSpeciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tree_species', function (Blueprint $table) {
            $table->renameColumn('user_id', 'soil_id');
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
            $table->renameColumn('soil_id', 'user_id');
        });
    }
}