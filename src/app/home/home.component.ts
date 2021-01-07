import { Component, OnInit } from '@angular/core';

import { ProductService } from "../product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products)
  }

  productDetails(item) {
    console.log(item)
  }

  selectedcategories(event) {
    if (event.checked) {
      this.products = this.products.map(e => {
        if (e.category == event.source.name) {
          e.isFilter = !e.isFilter
        }
        return e;
      });
    } else {
      this.products = this.products.map(e => {
        if (e.category == event.source.name) {
          e.isFilter = !e.isFilter
        }
        return e;
      });
    }
  }

}
