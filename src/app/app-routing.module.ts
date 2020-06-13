import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { InventoryComponent} from './inventory/inventory.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommentComponent } from './comment/comment.component'
import { HeaderComponent } from './header/header.component'
//import { RegisterComponent } from './registerLogin/register.component'




const routes: Routes = [
  {path: 'articel', component: ArticleListComponent},
  {path: 'inventory', component: InventoryComponent},
  //{path: 'registerLogin', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ArticleListComponent, InventoryComponent, UserListComponent, CommentComponent];