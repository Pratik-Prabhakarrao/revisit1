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
productMessage: undefined | string;
ngOnInit():void{
this.list();
}
deleteProduct(id:number){
this.product.deleteProduct(id).subscribe((result)=>{
if(result){
  this.productMessage = "Product is deleted";

  //to refresh the page after deletign the product
this.list();
  
}
});
setTimeout(()=>{
  this.productMessage = undefined;
},3000)


}

//avoid duplication of get productlist 
list(){
  this.product.productList().subscribe((result)=>{
    console.warn(result);
    this.productList = result;
    
  })
}

}
