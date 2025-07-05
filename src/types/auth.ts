export interface AuthState {
    user: string | null;
    loading: boolean;
    error: string | null;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials {
    username: string;
}


export interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
        username: string;
    };

}