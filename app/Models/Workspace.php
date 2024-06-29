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
    ];

    public function getName(): string
    {

        return $this->attributes[$this->getNameKey()];
    }

    public function setName(string $value): void
    {

        $this->attributes[$this->getNameKey()] = $value;
    }

    public function organization(): BelongsTo
    {

        return $this->belongsTo(Organization::class);
    }

    public function projects(): HasMany
    {

        return $this->hasMany(Project::class);
    }

    public function users(): BelongsToMany
    {

        return $this->belongsToMany(User::class);
    }

    public function getNameKey(): string
    {

        return 'name';
    }
}
