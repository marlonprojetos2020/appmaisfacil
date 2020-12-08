import { Role } from './role';

export interface UserDetails {
    id: number;
    email: string;
    name: string;
    roles: Role[];
}
