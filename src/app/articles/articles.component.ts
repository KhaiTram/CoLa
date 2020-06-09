import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})



export class ArticlesComponent implements OnChanges {

  images: any[];
  filterBy?: number = 0
  allImages: any[] = [];


  

  constructor(private imageService: ImageService) {
    this.allImages = this.imageService.getImages();
  }
  ngOnChanges() {
    this.allImages = this.imageService.getImages();
  }
}

