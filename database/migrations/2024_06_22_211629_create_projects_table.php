<?php

use App\Enums\ProjectStatus;
use App\Models\Client;
use App\Models\Organization;
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
            $table->string('description')->nullable();
            $table->string('image_url')->nullable();
            $table->boolean('is_private')->default(false);
            $table->boolean('is_billable')->default(false);
            $table->boolean('is_recurring')->default(false);
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->integer('estimate_duration')->nullable();
            $table->integer('estimate_duration_per_task')->nullable();
            $table->enum('status', ProjectStatus::values());
            $table->foreignIdFor(Workspace::class)->constrained()->cascadeOnDelete();
            $table->foreignIdFor(Organization::class)->constrained()->cascadeOnDelete();
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
