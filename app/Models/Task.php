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

    public function getTitle(): string
    {

        return $this->attributes[$this->getTitleKey()];
    }

    public function setTitle(string $value): void
    {

        $this->attributes[$this->getTitleKey()] = $value;
    }

    public function getDescription(): string
    {

        return $this->attributes[$this->getDescriptionKey()];
    }

    public function setDescription(string $value): void
    {

        $this->attributes[$this->getDescriptionKey()] = $value;
    }

    public function getStartDateTime(): DateTime
    {

        return $this->attributes[$this->getStartDateTimeKey()];
    }

    public function setStartDateTime(DateTime $value): void
    {

        $this->attributes[$this->getStartDateTimeKey()] = $value;
    }

    public function getEndDateTime(): DateTime
    {

        return $this->attributes[$this->getEndDateTimeKey()];
    }

    public function setEndDateTime(DateTime $value): void
    {

        $this->attributes[$this->getEndDateTimeKey()] = $value;
    }

    public function user(): BelongsTo
    {

        return $this->belongsTo(User::class);
    }

    public function project(): BelongsTo
    {

        return $this->belongsTo(Project::class);
    }

    public function getTitleKey(): string
    {

        return 'title';
    }

    public function getDescriptionKey(): string
    {

        return 'description';
    }

    public function getStartDateTimeKey(): string
    {

        return 'start_datetime';
    }

    public function getEndDateTimeKey(): string
    {

        return 'end_datetime';
    }
}
