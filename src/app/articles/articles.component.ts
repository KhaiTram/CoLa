import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { commentService } from '../comment.service';
import { InventoryService } from '../inventory.service';
import { AuthService } from '../auth.service';
import { ArchiveService} from '../archive.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})



export class ArticlesComponent implements OnInit, OnChanges {

  articles: any[] = [];
  filterBy?: number = 0
  
  UserArticles: any[] = [];

  // The articles which exceed the maximum number
  criticalArticles: any[] = [];
  comments: any[];
  comment: any;
  usercomment: any ={User_Benutzername: "", Kommentar_ID: "", Kommentar_Text: ""};
  inventories: any[];
  user: any = { Benutzername: "Tobias" };
  currentUser: any;
 

  constructor(private commentService: commentService,
    private inventoryService: InventoryService,
    private authService: AuthService,
    private archiveService: ArchiveService) { }


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


  // The Product quantity in the user's warehouse is compared with the maximum value.   
  onClick() {
    console.log(this.UserArticles);
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

  
  // The Comment is splitted by a "-", whereby the respective product name is inserted
  createComment() {
    var commentText;
    if (this.criticalArticles.length === 0){
      this.comment = this.comments.find(element =>  element.ID === 5);
      commentText = this.comment.Kommentar_Text
    }else{
      var article = this.criticalArticles[0];
      this.comment = this.comments.find(element =>  element.ID === article.Category);
      var commentParts = this.comment.Kommentar_Text.split("-");
      commentText = commentParts [0] + article.Produktname + commentParts[1];
    }
    console.log(this.criticalArticles);
    console.log(this.comment);
      this.usercomment = {User_Benutzername: this.currentUser.Benutzername, Kommentar_ID: this.comment.ID, Kommentartext: commentText};
  }

  updateInventory() {
    this.archiveService.postArchive(this.usercomment).subscribe(date => {});
    this.articles.forEach(value => {
      this.inventoryService.putInventories(value).subscribe(data => { });
    })
    this.articles = [];
    this.criticalArticles = [];
  }



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

