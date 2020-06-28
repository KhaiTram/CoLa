import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { RegisterComponent } from './register/register.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import { ChangePasswordComponent } from './change-password/change-password.component';




const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'changePassword', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ArticlesComponent, RegisterComponent, CommentComponent, HeaderComponent, ChangePasswordComponent]