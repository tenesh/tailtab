<?php

namespace App\Models;

use App\Enums\ClientStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'status',
    ];

    protected function casts(): array
    {

        return [
            'status' => ClientStatus::class,
        ];
    }

    public function organization(): BelongsTo
    {

        return $this->belongsTo(Organization::class);
    }

    public function projects(): HasMany
    {

        return $this->hasMany(Project::class);
    }
}
