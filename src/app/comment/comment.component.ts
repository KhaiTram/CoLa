import { Component, OnInit } from '@angular/core';
 import { commentService } from '../comment.service'

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments = [];
  constructor (
     private commentService : commentService
    )
     {}

  //This function gets called first and automatically after the page is loaded
  ngOnInit(): void {
    this.commentService.getComments()
    .subscribe(data => this.comments = data); 
  }

}
