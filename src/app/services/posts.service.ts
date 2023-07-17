import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from '../Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseURL: string = `http://localhost:3000`;
  
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<IPost[]>(`${this.baseURL}/posts`);
  }
  
  createPost(post: IPost) {
    return this.http.post(`${this.baseURL}/posts`, post);
  }

  getPostById(id: number) {
    return this.http.get<IPost>(`${this.baseURL}/posts/${id}`);
  }

  deletePostById(id: number) {
    return this.http.delete(`${this.baseURL}/posts/${id}`);
  }

  updatePostById(id: number, body: IPost) {
    return this.http.put(`${this.baseURL}/posts/${id}`, body);
  }
  
}
