import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsStore } from '../../../../domain/src/lib/state/posts.store';
import { Post } from 'libs/posts/domain/src/lib/models/post.model';
import { Observable } from 'rxjs';
import { PostsUiComponent } from '../../../../ui/src/lib/posts-ui/posts-ui.component';

@Component({
  selector: 'lib-posts-feature',
  imports: [CommonModule,PostsUiComponent ],
  providers:[PostsStore],
  templateUrl: './posts-feature.component.html',
  styleUrl: './posts-feature.component.scss',
})
export class PostsFeatureComponent {
  posts$: Observable<Post[]> | undefined;
  loading$!: Observable<boolean>;
  error$: Observable<string | null> | undefined;

  constructor(private postsStore: PostsStore) {}

  ngOnInit(): void {
    this.posts$ = this.postsStore.posts$;
    this.loading$ = this.postsStore.loading$;
    this.error$ = this.postsStore.error$;
    this.postsStore.loadPosts();
  }

  onCreate(): void {
    const newPost: Post = {
      userId: 1,
      id: 0,
      title: 'New Post',
      body: 'Post content',
    };
    this.postsStore.createPost(newPost);
  }

  onDelete(id: number): void {
    this.postsStore.deletePost(id);
  }
}
