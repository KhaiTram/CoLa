import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})



export class ArticlesComponent implements OnChanges {

  articles: any[];
  filterBy?: number = 0
  allArticles: any[] = [];


  

  constructor(private articleService: ArticleService) {
    this.articleService.getArticles().subscribe(data => this.allArticles = data);;
  }
  ngOnChanges() {
   this.articleService.getArticles().subscribe(data => this.allArticles = data);;
  }
}

