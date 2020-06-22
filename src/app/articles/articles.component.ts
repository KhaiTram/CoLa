import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ArticleService } from '../article.service';
import { commentService } from '../comment.service';
import { InventoryService } from '../inventory.service';

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

  user: any= {Benutzername: "Tobias"};
  


  constructor(private articleService: ArticleService, private commentService: commentService, private inventoryService: InventoryService) {
    this.commentService.getComments().subscribe(data => this.comments = data);
    this.articleService.getArticles().subscribe(data => this.allArticles = data);
    this.inventoryService.getInventory().subscribe(data => this.inventories = data);
  }
  ngOnChanges() {
    this.articleService.getArticles().subscribe(data => this.allArticles = data);
    this.inventoryService.getInventory().subscribe(data => this.inventories = data);
  }

  onClick() {
    console.log(this.user);
    var othis = this;
    this.inventories.forEach(function (value) {
      if (value.User_Benutzername = othis.user.Benutzername) {
        if (value.Menge > othis.allArticles.find(x => x.Produktname === value.Artikel_Produktname).MaximaleAnzahl) {
          console.log(value);
        }
      }
    });
    document.getElementById('modal').style.display = "flex";

  };

  onClose() {
    document.getElementById('modal').style.display = "none";
  };

}

