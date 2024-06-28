<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'onboarded',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected function casts(): array
    {

        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function getOnboarded(): bool
    {

        return $this->attributes[$this->getOnboardedAttributeKey()];
    }

    public function setOnboarded(bool $value): void
    {

        $this->attributes[$this->getOnboardedAttributeKey()] = $value;
    }

    public function getAccount(): HasOne {
        return $this->hasOne(Account::class);
    }

    public function getOrganizations(): BelongsToMany
    {
        return $this->belongsToMany(Organization::class);
    }

    public function getOnboardedAttributeKey(): string
    {

        return 'onboarded';
    }
}
