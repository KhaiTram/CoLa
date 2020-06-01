import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user.service';
import { ArticleService } from './article.service';
import { ArticleListComponent } from './article-list/article-list.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryService } from './inventory.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ArticleListComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService,ArticleService,InventoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
