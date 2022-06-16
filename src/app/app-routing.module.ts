import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './views/category/category.component';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { MediaCrudComponent } from './views/media-crud/media-crud.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'media/crud', component: MediaCrudComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
