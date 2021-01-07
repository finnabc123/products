import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { AddProductComponent } from "../add-product/add-product.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    let itemId;
    this.route.paramMap.subscribe(m => {
      itemId = +m.get('id');
      this.product = this.productService.dummyProducts.find(item => item.id === itemId)
      console.log(this.product)
    });
  }

  removeItem(product) {
    console.log(product)
    this.productService.dummyProducts = this.productService.dummyProducts.map(e => {
      if (e.id === product.id) {
        e.isRemoved = !e.isRemoved
      }
      return e;
    });
    this.router.navigateByUrl('/home');
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        const product = {
          id: result.id,
          title: result.title,
          category: result.category,
          price: result.price,
          description: result.description,
          image: result.image,
          isFilter: true,
          isRemoved: false
        }
        console.log(product)
        this.productService.dummyProducts.unshift(product);
        this.router.navigateByUrl('/home');
      }
    });
  }
}
