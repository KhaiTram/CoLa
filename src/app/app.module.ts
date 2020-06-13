import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
 
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { ArticleService } from './article.service';
//import { ArticleListComponent } from './article-list/article-list.component';
//import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory.service';
import { RegisterComponent } from './registerLogin/register.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductCategoryService } from './productCategory.service';
import { ImageService } from './image.service';
import { ArticlesComponent } from './articles/articles.component';
import { FilterimagesPipe } from "./filterimages.pipe"


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    routingComponents,
    //ArticleListComponent,
    //InventoryComponent,
    RegisterComponent,
    CommentComponent,
    HeaderComponent,
    ArticlesComponent,
    FilterimagesPipe,
    CategoryListComponent
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
    InventoryService,
    ProductCategoryService,
    ImageService,
    FilterimagesPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
