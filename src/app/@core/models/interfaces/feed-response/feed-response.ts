import { IArticle } from "../article/article";

export interface IFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}