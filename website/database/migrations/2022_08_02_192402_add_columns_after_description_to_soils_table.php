<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsAfterDescriptionToSoilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('soils', function (Blueprint $table) {
            $table->string('texture', 100)->nullable()->after("description");
            $table->string('structure', 100)->nullable()->after("description");
            $table->string('porosity', 100)->nullable()->after("description");
            $table->string('chemistry', 100)->nullable()->after("description");
            $table->string('colour', 100)->nullable()->after("description");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('soils', function (Blueprint $table) {
            $table->dropColumn("texture");
            $table->dropColumn("structure");
            $table->dropColumn("porosity");
            $table->dropColumn("chemistry");
            $table->dropColumn("colour");
        });
    }
}