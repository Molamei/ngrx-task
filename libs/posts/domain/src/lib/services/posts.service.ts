import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  private api = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api);
  }

  getById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.api}/${id}`);
  }

  create(post: Post): Observable<Post> {
    return this.http.post<Post>(this.api, post);
  }

  update(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.api}/${post.id}`, post);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
