import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataType';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
product:ProductService = inject(ProductService);
productList:undefined | product[];
ngOnInit():void{
this.product.productList().subscribe((result)=>{
  console.warn(result);
  this.productList = result;
  
})
}
}
