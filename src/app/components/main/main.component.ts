import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IPost } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allPosts: IPost[] = [];
  maxPostId: number = 0;
  constructor(private postsService: PostsService,
    private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().subscribe(data => {
      this.allPosts = data;

      let allPostIds: number[] = new Array();
      this.allPosts.map(post => {
        allPostIds.push(post.id);
      });
    this.maxPostId = allPostIds.length === 0 ? 0 : Math.max.apply(null, allPostIds);
  
    });    
  }

  viewPostDetails(post: IPost) {
    let modalRef = this.modalService.open(PopupComponent, {centered: true});
    modalRef.componentInstance.postDetails = post;
    modalRef.componentInstance.mode = "VIEW";
  }

  editPostDetails(post: IPost) {
    let modalRef = this.modalService.open(PopupComponent, {centered: true});
    modalRef.componentInstance.postDetails = post;
    modalRef.componentInstance.mode = "UPDATE";

    modalRef.closed.subscribe(data => {
      this.getAllPosts();
    });
  }

  createPostDetails() {
    let modalRef = this.modalService.open(PopupComponent, {centered: true});
    modalRef.componentInstance.mode = "CREATE";
    modalRef.componentInstance.postSize = this.maxPostId + 1;

    modalRef.closed.subscribe(data => {
      this.getAllPosts();
    });
  }

  deletePostDetails(postId: number) {
    let flag = confirm("Do you wish to delete this post?");
    if(flag) {
      this.postsService.deletePostById(postId).subscribe(data => {
        this.getAllPosts();
      })
    }

  }

}
