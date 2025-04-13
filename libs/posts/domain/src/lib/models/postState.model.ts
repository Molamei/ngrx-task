import { Post } from "./post.model";

export interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null;
  }