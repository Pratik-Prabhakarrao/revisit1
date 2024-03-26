import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  addProductMessage: undefined | string;
  router:Router=inject(Router);

  product: ProductService = inject(ProductService);
  submitProduct(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result);
      if (result) {
        this.addProductMessage = 'Product is successfully added';
      }
      setTimeout(() => {
        this.addProductMessage = undefined;
        this.router.navigate(['/seller-home'])

      }, 3000);
    });
  }
}
