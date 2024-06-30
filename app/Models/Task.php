<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'start_datetime',
        'end_datetime',
    ];

    protected function casts(): array
    {

        return [
            'start_datetime' => 'datetime',
            'end_datetime' => 'datetime',
        ];
    }

    public function account(): BelongsTo
    {

        return $this->belongsTo(Account::class);
    }

    public function project(): BelongsTo
    {

        return $this->belongsTo(Project::class);
    }
}
