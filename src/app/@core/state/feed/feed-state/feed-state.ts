import { IFeedResponse } from "@models/index";

export interface IFeedState{
isLoading: boolean;
error:string | null;
data:IFeedResponse | null;
}