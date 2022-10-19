export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
