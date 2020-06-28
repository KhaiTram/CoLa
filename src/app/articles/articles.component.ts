import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { commentService } from '../comment.service';
import { InventoryService } from '../inventory.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})



export class ArticlesComponent implements OnInit, OnChanges {

  articles: any[] = [];
  filterBy?: number = 0

  UserArticles: any[] = [];
  comments: any[];
  inventories: any[];
  user: any = { Benutzername: "Tobias" };
  currentUser: any;



  constructor(private commentService: commentService,
    private inventoryService: InventoryService,
    private authService: AuthService) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(data => this.comments = data);
    setTimeout(() => { this.currentUser = this.authService.getCurrentUser(); }, 1000);
    this.inventoryService.getInventoryProducts().subscribe(data => {
      setTimeout(() => { this.UserArticles = data.filter(x => x.User_Benutzername === this.currentUser.Benutzername) }, 1100);
    });

  };

  ngOnChanges() {

  };

  substract(index) {

    if (this.UserArticles[index].Menge > 0) {
      this.UserArticles[index].Menge--;
    }
  };

  add(index) {
    this.UserArticles[index].Menge++;
  };

  onClick() {
    console.log(this.currentUser);
    this.UserArticles.forEach(value => {
      this.addToInventory(value);
      if (value.Menge > value.MaximaleAnzahl) {
        //  console.log(value);
      }
    });
    this.updateInventory();
    document.getElementById('modal').style.display = "flex";
  };

  updateInventory() {
    console.log(this.articles);
    this.articles.forEach(value => {
      this.inventoryService.putInventories(value).subscribe(data => { });
    })

  }


  // function buildComment(comment: string[], Produktname?: string[]) {
  //   if (value.User_Benutzername = othis.user.Benutzername) {
  //    if (value.Menge > othis.allArticles.find(x => x.Produktname === value.Artikel_Produktname).MaximaleAnzahl) {
  //  return comment.join " " + Produktname.join ;
  //  };

  // var stringParts = comment.split("-");
  // var neuerKommentar = stringParts [0] + "Produktname" + StringParts[1];


  addToInventory(article) {
    this.articles.push({
      User_Benutzername: article.User_Benutzername,
      Artikel_Produktname: article.Artikel_Produktname,
      Menge: article.Menge
    })
  }

  onClose() {
    document.getElementById('modal').style.display = "none";
  };

}

