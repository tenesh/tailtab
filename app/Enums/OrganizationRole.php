<?php

namespace App\Enums;

enum OrganizationRole: string
{
    case OWNER = 'owner';
    case ADMIN = 'admin';
    case MEMBER = 'member';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}