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

        return $this->attributes[$this->getTitleAttributeKey()];
    }

    public function setTitle(string $value): void
    {

        $this->attributes[$this->getTitleAttributeKey()] = $value;
    }

    public function getDescription(): string
    {

        return $this->attributes[$this->getDescriptionAttributeKey()];
    }

    public function setDescription(string $value): void
    {

        $this->attributes[$this->getDescriptionAttributeKey()] = $value;
    }

    public function getStartDateTime(): DateTime
    {

        return $this->attributes[$this->getStartDateTimeAttributeKey()];
    }

    public function setStartDateTime(DateTime $value): void
    {

        $this->attributes[$this->getStartDateTimeAttributeKey()] = $value;
    }

    public function getEndDateTime(): DateTime
    {

        return $this->attributes[$this->getEndDateTimeAttributeKey()];
    }

    public function setEndDateTime(DateTime $value): void
    {

        $this->attributes[$this->getEndDateTimeAttributeKey()] = $value;
    }

    public function getOrganization(): BelongsTo
    {

        return $this->belongsTo(Organization::class);
    }

    public function getUser(): BelongsTo
    {

        return $this->belongsTo(User::class);
    }

    public function getProject(): BelongsTo
    {

        return $this->belongsTo(Project::class);
    }

    public function getTitleAttributeKey(): string
    {

        return 'title';
    }

    public function getDescriptionAttributeKey(): string
    {

        return 'description';
    }

    public function getStartDateTimeAttributeKey(): string
    {

        return 'start_datetime';
    }

    public function getEndDateTimeAttributeKey(): string
    {

        return 'end_datetime';
    }
}
