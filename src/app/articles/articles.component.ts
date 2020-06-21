import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ArticleService } from '../article.service';
import { commentService } from '../comment.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})



export class ArticlesComponent implements OnChanges {

  articles: any[];
  filterBy?: number = 0
  allArticles: any[] = [];

  comments: any[];

  inventories: any[];


  

  constructor(private articleService: ArticleService, private commentService: commentService) {
   this.commentService.getComments().subscribe(data => this.comments = data); 
    this.articleService.getArticles().subscribe(data => this.allArticles = data);
  }
  ngOnChanges() {
   this.articleService.getArticles().subscribe(data => this.allArticles = data);
  }

  onClick(){
   
    document.getElementById('modal').style.display = "flex";
  };

  onClose(){
    document.getElementById('modal').style.display = "none";
  };

}

