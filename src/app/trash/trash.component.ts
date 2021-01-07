import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.css']
})
export class TrashComponent implements OnInit {

  constructor(private productService: ProductService) { }

  removedProduct = []
  ngOnInit(): void {
    this.removedProduct = this.productService.dummyProducts.filter(p => p.isRemoved);
    console.log(this.removedProduct)
  }

  addRemoveItem(item) {
    console.log(item)
    this.productService.dummyProducts = this.productService.dummyProducts.map(e => {
      if (e.id === item.id) {
        e.isRemoved = !e.isRemoved
      }
      return e;
    });
    this.removedProduct = this.productService.dummyProducts.filter(p => p.isRemoved);
  }

  deleteRemoveItem(item) {
    console.log(item)
    this.productService.dummyProducts = this.productService.dummyProducts.filter(p => p.id !== item.id);
    this.removedProduct = this.removedProduct.filter(p => p.id !== item.id);
  }

}
