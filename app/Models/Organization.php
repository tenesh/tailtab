<?php

namespace App\Models;

use App\Enums\CurrencyAlpha3;
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
        'currency',
    ];

    public function getCurrency(): CurrencyAlpha3
    {

        return $this->attributes[$this->getCurrencyKey()];
    }

    public function setCurrency(CurrencyAlpha3 $value): void
    {

        $this->attributes[$this->getCurrencyKey()] = $value;
    }

    public function getImageUrl(): string
    {

        return $this->attributes[$this->getImageUrlKey()];
    }

    public function setImageUrl(string $value): void
    {

        $this->attributes[$this->getImageUrlKey()] = $value;
    }

    public function getName(): string
    {

        return $this->attributes[$this->getNameKey()];
    }

    public function setName(string $value): void
    {

        $this->attributes[$this->getNameKey()] = $value;
    }

    public function users(): HasMany
    {

        return $this->hasMany(User::class);
    }

    public function workspaces(): HasMany
    {

        return $this->hasMany(Workspace::class);
    }

    public function clients(): HasMany
    {

        return $this->hasMany(Client::class);
    }

    public function getCurrencyKey(): string
    {

        return 'currency';
    }

    public function getImageUrlKey(): string
    {

        return 'image_url';
    }

    public function getNameKey(): string
    {

        return 'name';
    }
}
