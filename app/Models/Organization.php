<?php

namespace App\Models;

use App\Enums\OrganizationRole;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image_url',
        'currency_code',
    ];

    public function getCurrencyCode(): string
    {

        return $this->attributes[$this->getCurrencyCodeAttributeKey()];
    }

    public function setCurrencyCode(string $value): void
    {

        $this->attributes[$this->getCurrencyCodeAttributeKey()] = $value;
    }

    public function getImageUrl(): string
    {

        return $this->attributes[$this->getImageUrlAttributeKey()];
    }

    public function setImageUrl(string $value): void
    {

        $this->attributes[$this->getImageUrlAttributeKey()] = $value;
    }

    public function getName(): string
    {

        return $this->attributes[$this->getNameAttributeKey()];
    }

    public function setName(string $value): void
    {

        $this->attributes[$this->getNameAttributeKey()] = $value;
    }

    public function getOwner(): BelongsToMany
    {

        return $this->belongsToMany(User::class)->wherePivot('role', OrganizationRole::OWNER);
    }

    public function getMembers($active = false): BelongsToMany
    {

        return $this->belongsToMany(User::class)->wherePivot('is_active', $active);
    }

    public function getWorkspaces(): HasMany
    {

        return $this->hasMany(Workspace::class);
    }

    public function getProjects(): HasMany
    {

        return $this->hasMany(Project::class);
    }

    public function getClients(): HasMany
    {

        return $this->hasMany(Client::class);
    }

    public function getTasks(): HasMany
    {

        return $this->hasMany(Task::class);
    }

    public function getCurrencyCodeAttributeKey(): string
    {

        return 'currency_code';
    }

    public function getImageUrlAttributeKey(): string
    {

        return 'image_url';
    }

    public function getNameAttributeKey(): string
    {

        return 'name';
    }
}
