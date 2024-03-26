import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  product:ProductService = inject(ProductService);
  popularProduct:undefined|product[];
  

  ngOnInit():void{
    this.product.popularProducts().subscribe((result)=>{
      this.popularProduct =result;
    })

  }

}
