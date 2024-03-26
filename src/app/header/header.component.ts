import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType:string ="default";
  sellerName:string ='';
  searchResult:undefined|product[];
  router: Router = inject(Router);
  product:ProductService = inject(ProductService);
  ngOnInit(): void {
    this.router.events.subscribe((result: any) => {
      if (result.url) {
        if (localStorage.getItem('seller') && result.url.includes('seller')) {
          console.warn('in seller area');
          this.menuType ="seller"
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.name;
          }
          
        } else {
          console.warn('outside seller area');
          this.menuType ="default"
        }
      }
    });
  }

  logOut(){
    localStorage.removeItem('seller');
    this.router.navigate(['/'])
  }

  searchProduct(query:KeyboardEvent){
    const element = query.target as HTMLInputElement;
    this.product.searchProducts(element.value).subscribe((result)=>{
      if(result.length>5){
      result.length =5;
      }
      this.searchResult= result;
    })

  }
  hideSearch(){
    this.searchResult= undefined;
  }
}
