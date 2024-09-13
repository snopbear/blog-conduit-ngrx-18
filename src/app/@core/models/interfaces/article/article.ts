import { IProfile } from "../profile/profile";

export interface IArticle {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: IProfile;
  favorited: boolean;
  favoritesCount: number;
}