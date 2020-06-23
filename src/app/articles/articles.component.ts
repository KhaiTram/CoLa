import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ArticleService } from '../article.service';
import { commentService } from '../comment.service';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})



export class ArticlesComponent implements OnInit, OnChanges {

  articles: any[];
  filterBy?: number = 0
  UserArticles: any[] = [];

  comments: any[];
  inventories: any[];
  user: any = { Benutzername: "Tobias" };



  constructor(private articleService: ArticleService, private commentService: commentService,
    private inventoryService: InventoryService) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(data => this.comments = data);
    this.inventoryService.getInventoryProducts().subscribe(data => {
      this.UserArticles = data.filter(x => x.User_Benutzername === this.user.Benutzername);
    });

  }

  ngOnChanges() {
  }


  onClick() {
    console.log(this.UserArticles);
    this.UserArticles.forEach(function (value) {
      if (value.Menge > value.MaximaleAnzahl) {
        console.log(value);
      }
    });
    document.getElementById('modal').style.display = "flex";

  };

  onClose() {
    document.getElementById('modal').style.display = "none";
  };

}

