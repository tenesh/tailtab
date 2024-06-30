<?php

namespace App\Models;

use App\Enums\ProjectStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Date;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'private',
        'billable',
        'recurring',
        'start_date',
        'end_date',
        'hour_billable_rate',
        'status',
    ];

    protected function casts(): array
    {

        return [
            'private' => 'boolean',
            'billable' => 'boolean',
            'recurring' => 'boolean',
            'start_date' => 'date',
            'end_date' => 'date',
            'hour_billable_rate' => 'integer',
            'status' => ProjectStatus::class,
        ];
    }

    public function workspace(): BelongsTo
    {

        return $this->belongsTo(Workspace::class);
    }

    public function client(): BelongsTo
    {

        return $this->belongsTo(Client::class);
    }

    public function tasks(): HasMany
    {

        return $this->hasMany(Task::class);
    }

    public function accounts(): BelongsToMany
    {

        return $this->belongsToMany(Account::class);
    }
}
