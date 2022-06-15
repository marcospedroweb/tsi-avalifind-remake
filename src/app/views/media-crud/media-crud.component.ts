import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { Media } from 'src/app/model/media';
import { CategoryService } from 'src/app/services/category.service';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-media-crud',
  templateUrl: './media-crud.component.html',
  styleUrls: ['./media-crud.component.css']
})
export class MediaCrudComponent implements OnInit {

  categories = new Array<Category>();
  medias = new Array<Media>();
  media?: Media;
  hide = false;
  editing = false;

  constructor(private mediaService: MediaService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.list();
    this.categoryService.list().subscribe(categories => {
      this.categories = categories;
    });
  }

  list() {
    this.mediaService.list().subscribe(medias => {
      this.medias = medias;
    });
  }

  create() {
    this.media = new Media();
    this.hide = true;
  }

  store() {
    if (this.media)
      if (!this.editing)
        this.mediaService.store(this.media).subscribe(media => {
          this.list();
          this.media = undefined;
          this.hide = false;
        });
      else {

        this.mediaService.update(this.media).subscribe(media => {
          this.list();
          this.media = undefined;
          this.hide = false;
        });
      }
  }

  edit(media: Media) {
    this.media = media;
    this.hide = true;
    this.editing = true;
  }

  deleteItem(media_id: number) {
    this.mediaService.delete(media_id).subscribe(media => {
      this.list();
      this.media = undefined;
      this.editing = false;
    });
  }

  cancel() {
    this.media = undefined
    this.editing = false;
    this.hide = false;
  }

  convertImage(eventChange: any) {
    const file = eventChange.target.files[0];
    const reader = new FileReader();
    reader.onload = (event: any) => {
      if (this.media) {
        this.media.image = event.target.result;
        console.log(event.target.result)
      }
    }
    reader.readAsDataURL(eventChange.target.files[0]);
  }
}
