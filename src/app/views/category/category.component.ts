import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = new Array<Category>();
  category?: Category;
  hide = false;
  editing = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.categoryService.list().subscribe(categories => {
      this.categories = categories;
    });
  }

  create() {
    this.category = new Category();
    this.hide = true;
  }

  store() {
    if (this.category)
      if (!this.editing)
        this.categoryService.store(this.category).subscribe(category => {
          this.list();
          this.category = undefined;
          this.hide = false;
        });
      else
        this.categoryService.update(this.category).subscribe(category => {
          this.list();
          this.category = undefined;
          this.hide = false;
        });
  }

  edit(category: Category) {
    this.category = category;
    this.hide = true;
    this.editing = true;
  }

  deleteItem(category_id: number) {
    this.categoryService.delete(category_id).subscribe(category => {
      this.list();
      this.category = undefined;
      this.editing = false;
    });
  }

  cancel() {
    this.category = undefined
    this.editing = false;
    this.hide = false;
  }
}
