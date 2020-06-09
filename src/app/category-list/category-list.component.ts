import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from '..//productCategory.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  arrCategoryList = [];
  constructor( private productCategoryService : ProductCategoryService) { }

  ngOnInit(): void {
    this.productCategoryService.getCategories()
    .subscribe(data => this.arrCategoryList = data);
  }

}
