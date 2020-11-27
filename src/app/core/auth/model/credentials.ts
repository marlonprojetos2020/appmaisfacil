import {UserDetails} from './user-details';

export interface Credentials {
    accessToken: string;
    refreshToken: string;
    rememberUser: boolean;
    userDetails: UserDetails;
}
