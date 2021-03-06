import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
//---------------------------------------------------------------------------
import { AppComponent } from './app.component';
//---------------------------------------------------------------------------
import { UserService } from './user.service';
import { ArticleService } from './article.service';
import { ProductCategoryService } from './productCategory.service';
import { commentService} from './comment.service';
import { InventoryService } from './inventory.service';
import { FilterArticlesPipe } from "./filterArticles.pipe";
import { AuthService } from './auth.service';
import { ArchiveService} from './archive.service';





@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilterArticlesPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UserService,
    ArticleService,
    commentService,
    InventoryService,
    ProductCategoryService,
    FilterArticlesPipe,
    AuthService,
    ArchiveService],
  bootstrap: [AppComponent]
})

export class AppModule { }
