import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticlesComponent } from './articles/articles.component';
import { InventoryComponent } from './inventory/inventory.component';
import { RegisterComponent } from './register/register.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';




const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'articles-list', component: ArticleListComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'category-list', component: CategoryListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'changePassword', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[UserListComponent, ArticlesComponent, ArticleListComponent, InventoryComponent,  RegisterComponent, CommentComponent, HeaderComponent, CategoryListComponent,LoginComponent, ChangePasswordComponent]