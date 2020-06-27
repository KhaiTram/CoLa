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

  articles: any[];
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
    this.inventoryService.getInventoryProducts().subscribe(data => {
      this.UserArticles = data.filter(x => x.User_Benutzername === this.user.Benutzername);
    });
    this.currentUser = this.authService.getCurrentUser();
  };

  ngOnChanges() {
  };

  substract(index) {

    if (this.UserArticles[index].Menge > 0){
      this.UserArticles[index].Menge--;
    }
  };

  add(index) {
    this.UserArticles[index].Menge++;
  };

  onClick() {
    console.log(this.currentUser);
    this.UserArticles.forEach(value =>{
      this.addToInventory(value);
      if (value.Menge > value.MaximaleAnzahl) {
        console.log(value);
      }
    });
    document.getElementById('modal').style.display = "flex";
  };

  


// function buildComment(comment: string[], Produktname?: string[]) {
//   if (value.User_Benutzername = othis.user.Benutzername) {
//    if (value.Menge > othis.allArticles.find(x => x.Produktname === value.Artikel_Produktname).MaximaleAnzahl) {
//  return comment.join " " + Produktname.join ;
//  };

// var stringParts = comment.split("-");
// var neuerKommentar = stringParts [0] + "Produktname" + StringParts[1];


  addToInventory(article) {

    
  }

  onClose() {
    document.getElementById('modal').style.display = "none";
  };

}

