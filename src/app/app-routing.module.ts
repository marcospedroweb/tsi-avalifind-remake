import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './views/category/category.component';
import { IndexComponent } from './views/index/index.component';
import { MediaCrudComponent } from './views/media-crud/media-crud.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'media/crud', component: MediaCrudComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
