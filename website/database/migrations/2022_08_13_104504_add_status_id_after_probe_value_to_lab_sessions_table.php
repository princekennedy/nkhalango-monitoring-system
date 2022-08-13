<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatusIdAfterProbeValueToLabSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('lab_sessions', function (Blueprint $table) {
            $table->unsignedBigInteger("status_id")->default(1)->after("probe_value");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('lab_sessions', function (Blueprint $table) {
            $table->dropColumn("status_id");
        });
    }
}