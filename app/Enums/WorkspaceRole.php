<?php

namespace App\Enums;

enum WorkspaceRole: string
{
    case ADMIN = 'admin';
    case MEMBER = 'member';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}