import { User } from "./users";

export interface Auth {
    user: User | null,
    isAuthenticated: boolean,
    isLoading: boolean | null,
    accessToken: string,
    error: string
}