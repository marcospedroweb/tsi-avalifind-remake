import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './views/user/user.component';
import { CategoryComponent } from './views/category/category.component';
import { MediaComponent } from './views/media/media.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './views/index/index.component';

import { MatInputModule } from '@angular/material/input';
import { MediaCrudComponent } from './views/media-crud/media-crud.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CategoryComponent,
    MediaComponent,
    IndexComponent,
    MediaCrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
