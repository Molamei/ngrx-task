import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../../../domain/src/lib/models/post.model';

@Component({
  selector: 'lib-posts-ui',
  imports: [CommonModule],
  templateUrl: './posts-ui.component.html',
  styleUrl: './posts-ui.component.scss',
})
export class PostsUiComponent {
  @Input() posts: Post[] | null = [];
  @Input() loading: boolean | null = false;
  @Input() error: string | null = null;

  @Output() create = new EventEmitter<void>();
  @Output() delete = new EventEmitter<number>();
}
