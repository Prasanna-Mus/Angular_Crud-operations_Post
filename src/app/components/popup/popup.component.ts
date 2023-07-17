import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IPost } from 'src/app/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() postDetails: any;
  @Input() mode: any;
  @Input() postSize: any;

  postObject: IPost = {
    id: 0,
    title: '',
    body: ''
  }

  constructor(private activeModal: NgbActiveModal,
      private postsService: PostsService  
    ) { }

  ngOnInit(): void {
    if(this.mode === 'VIEW' || this.mode === 'UPDATE') {
      this.postObject.id = this.postDetails.id;
      this.postObject.title = this.postDetails.title;
      this.postObject.body = this.postDetails.body;
    }
    else if(this.mode === 'CREATE') {
      this.postObject.id = this.postSize;
    }
  }

  closePopup() {
    this.activeModal.close();
  }

  onSubmit(form: any) {
    event?.preventDefault();
  }
  
  createPost(form: any) {
    this.postsService.createPost(this.postObject).subscribe(data => {
      this.activeModal.close();
    });
  }

  updatePost(form: any) {
    this.postsService.updatePostById(this.postObject.id, this.postObject).subscribe(data => {
      this.activeModal.close();
    });
  }

  

}
