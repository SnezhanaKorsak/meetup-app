import instance from './index';

import { AuthResponse } from '../types/auth';

export const authService = {
  registration(name: string, email: string, password: string, role: string) {
    return instance
      .post<AuthResponse>('auth/registration', { name, email, password, role })
      .then((res) => res.data);
  },
  login(email: string, password: string) {
    return instance.post<AuthResponse>('auth/login', { email, password }).then((res) => res.data);
  },
  logout() {
    return instance.post('auth/logout');
  },
};
