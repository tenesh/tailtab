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

    public function getName(): string
    {

        return $this->attributes[$this->getNameAttributeKey()];
    }

    public function setName(string $value): void
    {

        $this->attributes[$this->getNameAttributeKey()] = $value;
    }

    public function getPrivate(): bool
    {

        return $this->attributes[$this->getPrivateAttributeKey()];
    }

    public function setPrivate(bool $value): void
    {

        $this->attributes[$this->getPrivateAttributeKey()] = $value;
    }

    public function getBillable(): bool
    {

        return $this->attributes[$this->getBillableAttributeKey()];
    }

    public function setBillable(bool $value): void
    {

        $this->attributes[$this->getBillableAttributeKey()] = $value;
    }

    public function getRecurring(): bool
    {

        return $this->attributes[$this->getRecurringAttributeKey()];
    }

    public function setRecurring(bool $value): void
    {

        $this->attributes[$this->getRecurringAttributeKey()] = $value;
    }

    public function getStartDate(): Date
    {

        return $this->attributes[$this->getStartDateAttributeKey()];
    }

    public function setStartDate(Date $value): void
    {

        $this->attributes[$this->getStartDateAttributeKey()] = $value;
    }

    public function getEndDate(): Date
    {

        return $this->attributes[$this->getEndDateAttributeKey()];
    }

    public function setEndDate(Date $value): void
    {

        $this->attributes[$this->getEndDateAttributeKey()] = $value;
    }

    public function getStatus(): ProjectStatus
    {

        return $this->attributes[$this->getStatusAttributeKey()];
    }

    public function setStatus(ProjectStatus $value): void
    {

        $this->attributes[$this->getStatusAttributeKey()] = $value;
    }

    public function getHourBillableRate(): int
    {

        return $this->attributes[$this->getHourBillableRateAttributeKey()];
    }

    public function setHourBillableRate(int $value): void
    {

        $this->attributes[$this->getHourBillableRateAttributeKey()] = $value;
    }

    public function getOrganization(): BelongsTo
    {

        return $this->belongsTo(Organization::class);
    }

    public function getWorkspace(): BelongsTo
    {

        return $this->belongsTo(Workspace::class);
    }

    public function getClient(): BelongsTo
    {

        return $this->belongsTo(Client::class);
    }

    public function getTasks(): HasMany
    {

        return $this->hasMany(Task::class);
    }

    public function getMembers(): BelongsToMany
    {

        return $this->belongsToMany(User::class);
    }

    public function getNameAttributeKey(): string
    {

        return 'name';
    }

    public function getPrivateAttributeKey(): string
    {

        return 'private';
    }

    public function getBillableAttributeKey(): string
    {

        return 'billable';
    }

    public function getRecurringAttributeKey(): string
    {

        return 'recurring';
    }

    public function getStartDateAttributeKey(): string
    {

        return 'start_date';
    }

    public function getEndDateAttributeKey(): string
    {

        return 'end_date';
    }

    public function getStatusAttributeKey(): string
    {

        return 'status';
    }

    public function getHourBillableRateAttributeKey(): string
    {

        return 'hour_billable_rate';
    }
}
