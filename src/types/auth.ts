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
    firstName:string;
    lastName:string;
    username: string;
    confirmPassword:string;
}


export interface AuthResponse {
    token: string;
    user: {
        id: string;
        email: string;
        username: string;
    };

}