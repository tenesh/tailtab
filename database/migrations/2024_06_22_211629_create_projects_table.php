<?php

use App\Enums\ProjectStatus;
use App\Models\Client;
use App\Models\Workspace;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->boolean('private')->default(false);
            $table->boolean('billable')->default(false);
            $table->boolean('recurring')->default(false);
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->float('hour_billable_rate')->default(0);
            $table->enum('status', ProjectStatus::values());
            $table->foreignIdFor(Workspace::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Client::class)->nullable()->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
