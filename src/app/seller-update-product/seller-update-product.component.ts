import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataType';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  updateProductMessage:undefined | string;
  route:ActivatedRoute = inject(ActivatedRoute)
  // product:ProductService = inject(ProductService) this is also valid and better than calling it in the constructor
  constructor(private product:ProductService){}
  productData:undefined|product;
  ngOnInit():void{
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.getProduct(productId).subscribe((result)=>{ //we want to get this result prefilled 
      this.productData = result;
      
    })
    
  }
  
  updateProduct(data:any){
    
  }
}
