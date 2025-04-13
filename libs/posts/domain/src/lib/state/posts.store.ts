import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';
import { tap, switchMap } from 'rxjs';
import { PostsState } from '../models/postState.model';



@Injectable({ providedIn: 'root' })
export class PostsStore extends ComponentStore<PostsState> {
  constructor(private postsService: PostsService) {
    super({ posts: [], loading: false, error: null });
  }

  // Selectors
  readonly posts$ = this.select((state) => state.posts);
  readonly loading$ = this.select((state) => state.loading);
  readonly error$ = this.select((state) => state.error);

  // Updaters
  readonly setPosts = this.updater((state, posts: Post[]) => ({
    ...state,
    posts,
    loading: false,
  }));

  readonly setLoading = this.updater((state, loading: boolean) => ({
    ...state,
    loading,
  }));

  readonly setError = this.updater((state, error: string | null) => ({
    ...state,
    error,
    loading: false,
  }));

  // Effects
  readonly loadPosts = this.effect<void>((trigger$) =>
    trigger$.pipe(
      tap(() => this.setLoading(true)),
      switchMap(() =>
        this.postsService.getAll().pipe(
          tap({
            next: (posts) => {
              console.log('[loadPosts] Response:', posts); // ✅ log response
              this.setPosts(posts);
            },
            error: (err) => {
              console.error('[loadPosts] Error:', err.message);
              this.setError(err.message);
            },
          })
        )
      )
    )
  );
  
  readonly createPost = this.effect<Post>((post$) =>
    post$.pipe(
      switchMap((post) =>
        this.postsService.create(post).pipe(
          tap({
            next: (createdPost) => {
              console.log('[createPost] Created:', createdPost); // ✅ log response
              this.loadPosts(); // reload after creation
            },
            error: (err) => {
              console.error('[createPost] Error:', err.message);
              this.setError(err.message);
            },
          })
        )
      )
    )
  );
  
  readonly deletePost = this.effect<number>((id$) =>
    id$.pipe(
      switchMap((id) =>
        this.postsService.delete(id).pipe(
          tap({
            next: () => {
              console.log(`[deletePost] Deleted ID: ${id}`); // ✅ log deleted ID
              this.loadPosts(); // reload after delete
            },
            error: (err) => {
              console.error('[deletePost] Error:', err.message);
              this.setError(err.message);
            },
          })
        )
      )
    )
  );
  
}
