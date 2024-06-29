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

        return $this->attributes[$this->getNameKey()];
    }

    public function setName(string $value): void
    {

        $this->attributes[$this->getNameKey()] = $value;
    }

    public function getPrivate(): bool
    {

        return $this->attributes[$this->getPrivateKey()];
    }

    public function setPrivate(bool $value): void
    {

        $this->attributes[$this->getPrivateKey()] = $value;
    }

    public function getBillable(): bool
    {

        return $this->attributes[$this->getBillableKey()];
    }

    public function setBillable(bool $value): void
    {

        $this->attributes[$this->getBillableKey()] = $value;
    }

    public function getRecurring(): bool
    {

        return $this->attributes[$this->getRecurringKey()];
    }

    public function setRecurring(bool $value): void
    {

        $this->attributes[$this->getRecurringKey()] = $value;
    }

    public function getStartDate(): Date
    {

        return $this->attributes[$this->getStartDateKey()];
    }

    public function setStartDate(Date $value): void
    {

        $this->attributes[$this->getStartDateKey()] = $value;
    }

    public function getEndDate(): Date
    {

        return $this->attributes[$this->getEndDateKey()];
    }

    public function setEndDate(Date $value): void
    {

        $this->attributes[$this->getEndDateKey()] = $value;
    }

    public function getStatus(): ProjectStatus
    {

        return $this->attributes[$this->getStatusKey()];
    }

    public function setStatus(ProjectStatus $value): void
    {

        $this->attributes[$this->getStatusKey()] = $value;
    }

    public function getHourBillableRate(): int
    {

        return $this->attributes[$this->getHourBillableRateKey()];
    }

    public function setHourBillableRate(int $value): void
    {

        $this->attributes[$this->getHourBillableRateKey()] = $value;
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

    public function users(): BelongsToMany
    {

        return $this->belongsToMany(User::class);
    }

    public function getNameKey(): string
    {

        return 'name';
    }

    public function getPrivateKey(): string
    {

        return 'private';
    }

    public function getBillableKey(): string
    {

        return 'billable';
    }

    public function getRecurringKey(): string
    {

        return 'recurring';
    }

    public function getStartDateKey(): string
    {

        return 'start_date';
    }

    public function getEndDateKey(): string
    {

        return 'end_date';
    }

    public function getStatusKey(): string
    {

        return 'status';
    }

    public function getHourBillableRateKey(): string
    {

        return 'hour_billable_rate';
    }
}
