<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'image_url',
        'currency',
    ];

    public function account(): HasMany
    {

        return $this->hasMany(Account::class);
    }

    public function workspaces(): HasMany
    {

        return $this->hasMany(Workspace::class);
    }

    public function clients(): HasMany
    {

        return $this->hasMany(Client::class);
    }
}
