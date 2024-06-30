export interface User {
    name: string;
    email: string;
}

export interface Account {
    id: number;
    first_name: string;
    last_name: string;
    gender: Gender;
    birth_date: string;
    role: AccountRole;
    active: boolean;
    user_id: number;
    organization_id: number;
}

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
}

export enum AccountRole {
    ORGANIZATION_ADMIN = 'organization_admin',
    WORKSPACE_ADMIN = 'workspace_admin',
    PROJECT_MANAGER = 'project_manager',
    MEMBER = 'member',
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    appName: string;
    auth: {
        user: User;
    };
};
