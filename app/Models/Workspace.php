<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Workspace extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'hour_billable_rate',
    ];

    protected function casts(): array
    {

        return [
            'hour_billable_rate' => 'integer',
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

    public function getProjects(): HasMany
    {

        return $this->hasMany(Project::class);
    }

    public function getMembers(): BelongsToMany
    {

        return $this->belongsToMany(User::class);
    }

    public function getNameAttributeKey(): string
    {

        return 'name';
    }

    public function getHourBillableRateAttributeKey(): string
    {

        return 'hour_billable_rate';
    }
}
