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
  criticalArticles: any[] = [];
  comments: any[];
  comment: any;
  usercomment: any;
  inventories: any[];
  user: any = { Benutzername: "Tobias" };
  currentUser: any;

  // The Comment is splitted by a "-", whereby the respective product name which
  // reached the maximum limit is inserted

 

  constructor(private commentService: commentService,
    private inventoryService: InventoryService,
    private authService: AuthService) { }


// The Product quantity in the user's warehouse is compared with the maximum value.   
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
        
        var offlimit = value.Menge - value.MaximaleAnzahl
        
        this.criticalArticles.push({Produktname: value.Produktname, Offlimit: offlimit, Category: value.Produktkategorie_ID});
      }
    });
    this.createComment();
    this.updateInventory();
    document.getElementById('modal').style.display = "flex";
  };


  createComment() {
    var article = this.criticalArticles[0];
    var comment = this.comments.find(element =>  element.ID = article.Category);
    var commentParts = comment.split("-");
    var kommentar_Text = commentParts [0] + "Produktname" + commentParts[1];
    this.usercomment = {User_Benutzername: this.currentUser.Benutzername, Kommentar_ID: comment.ID, Kommentar_Text: kommentar_Text};
  }

  updateInventory() {
    console.log(this.articles);
    this.articles.forEach(value => {
      this.inventoryService.putInventories(value).subscribe(data => { });
    })
    console.log(this.usercomment);
  }


<<<<<<< HEAD
=======
  // function buildComment(comment: string[], Produktname?: string[]) {
  //   if (value.User_Benutzername = othis.user.Benutzername) {
  //    if (value.Menge > othis.allArticles.find(x => x.Produktname === value.Artikel_Produktname).MaximaleAnzahl) {
  //  return comment.join " " + Produktname.join ;
  //  };
>>>>>>> master



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

