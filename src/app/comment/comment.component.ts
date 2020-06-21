import { Component, OnInit } from '@angular/core';
import { CommentService } from '..//comment.service'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments = [];
  constructor (private commentService : CommentService) {}

  ngOnInit(): void {
    this.commentService.getComment()
    .subscribe(data => this.comments = data); 
  }

}
