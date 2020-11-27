import {TokenType} from './token-type';

export interface Jwt {
    iss: string;
    sub: string;
    iat: string;
    exp: number;
    tokenVersion: number;
    tokenType: TokenType;
    rememberUser: boolean;
}
