import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  categories = [
    { value: 'men clothing', viewValue: 'Men Clothing' },
    { value: 'jewelery', viewValue: 'Jewelery' },
    { value: 'women clothing', viewValue: 'Women clothing' },
    { value: 'electronics', viewValue: 'Electronics' }
  ];

  productModel = {
    id: Math.floor(Math.random() * 1000) + 1,
    title: '',
    category: '',
    price: '',
    description: '',
    image: '',
    isFilter: true,
    isRemoved: false
  }

}
