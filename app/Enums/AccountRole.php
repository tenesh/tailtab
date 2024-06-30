<?php

namespace App\Enums;

enum AccountRole: string
{
    case ORGANIZATION_ADMIN = 'organization_admin';
    case WORKSPACE_ADMIN = 'workspace_admin';
    case PROJECT_MANAGER = 'project_manager';
    case MEMBER = 'member';

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}