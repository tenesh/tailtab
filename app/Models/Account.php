<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Date;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'gender',
        'birth_date',
    ];

    protected function casts(): array
    {

        return [
            'birth_date' => 'date',
        ];
    }

    public function getFirstName(): string
    {

        return $this->attributes[$this->getFirstNameKey()];
    }

    public function setFirstName(string $value): void
    {

        $this->attributes[$this->getFirstNameKey()] = $value;
    }

    public function getLastName(): string
    {

        return $this->attributes[$this->getLastNameKey()];
    }

    public function setLastName(string $value): void
    {

        $this->attributes[$this->getLastNameKey()] = $value;
    }

    public function getGender(): string
    {

        return $this->attributes[$this->getGenderKey()];
    }

    public function setGender(string $value): void
    {

        $this->attributes[$this->getGenderKey()] = $value;
    }

    public function getBirthDate(): Date
    {

        return $this->attributes[$this->getBirthDateKey()];
    }

    public function setBirthDate(Date $value): void
    {

        $this->attributes[$this->getBirthDateKey()] = $value;
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getBirthDateKey(): string
    {

        return 'birth_date';
    }

    public function getGenderKey(): string
    {

        return 'gender';
    }

    public function getFirstNameKey(): string
    {

        return 'first_name';
    }

    public function getLastNameKey(): string
    {

        return 'last_name';
    }

}
