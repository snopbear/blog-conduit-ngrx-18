export interface ICurrentUser {
  id: number;
  email: string;
  createAt: string;
  updatedAt: string;
  username: string;
  bio?: string;
  image?: string;
  token: string;
}
