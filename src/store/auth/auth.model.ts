export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  role_id: number;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  loading: boolean;
}
