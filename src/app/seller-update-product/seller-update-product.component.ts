import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  router:Router =inject(Router)
  // product:ProductService = inject(ProductService) this is also valid and better than calling it in the constructor
  constructor(private product:ProductService){}
  productData:undefined|product;
  ngOnInit():void{
    let productId = this.route.snapshot.paramMap.get('id')
    productId && this.product.getProduct(productId).subscribe((result)=>{ //we want to get this result prefilled 
      this.productData = result;
      
    })
    
  }
  
  updateProduct(data:product){
    if(this.productData){
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result)=>{ 
      if(result){
        this.updateProductMessage ="Product has been updated"
      }
    })
    setTimeout(() => {
      this.updateProductMessage= undefined;
      this.router.navigate(['/seller-home'])
    }, 3000);
  }
}
