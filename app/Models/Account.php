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

        return $this->attributes[$this->getFirstNameAttributeKey()];
    }

    public function setFirstName(string $value): void
    {

        $this->attributes[$this->getFirstNameAttributeKey()] = $value;
    }

    public function getLastName(): string
    {

        return $this->attributes[$this->getLastNameAttributeKey()];
    }

    public function setLastName(string $value): void
    {

        $this->attributes[$this->getLastNameAttributeKey()] = $value;
    }

    public function getGender(): string
    {

        return $this->attributes[$this->getGenderAttributeKey()];
    }

    public function setGender(string $value): void
    {

        $this->attributes[$this->getGenderAttributeKey()] = $value;
    }

    public function getBirthDate(): Date
    {

        return $this->attributes[$this->getBirthDateAttributeKey()];
    }

    public function setBirthDate(Date $value): void
    {

        $this->attributes[$this->getBirthDateAttributeKey()] = $value;
    }

    public function getUser(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getBirthDateAttributeKey(): string
    {

        return 'birth_date';
    }

    public function getGenderAttributeKey(): string
    {

        return 'gender';
    }

    public function getFirstNameAttributeKey(): string
    {

        return 'first_name';
    }

    public function getLastNameAttributeKey(): string
    {

        return 'last_name';
    }

}
