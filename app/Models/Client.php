<?php

namespace App\Models;

use App\Enums\ClientStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Date;

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

    public function getName(): string
    {

        return $this->attributes[$this->getNameKey()];
    }

    public function setName(string $value): void
    {

        $this->attributes[$this->getNameKey()] = $value;
    }

    public function getStatus(): ClientStatus
    {

        return $this->attributes[$this->getStatusKey()];
    }

    public function setStatus(ClientStatus $value): void
    {

        $this->attributes[$this->getStatusKey()] = $value;
    }

    public function organization(): BelongsTo
    {

        return $this->belongsTo(Organization::class);
    }

    public function projects(): HasMany
    {

        return $this->hasMany(Project::class);
    }

    public function getNameKey(): string
    {

        return 'name';
    }

    public function getStatusKey(): string
    {

        return 'status';
    }
}
