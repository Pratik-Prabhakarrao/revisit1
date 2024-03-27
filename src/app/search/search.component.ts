import { Component, OnInit, Query, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/dataType';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  product: ProductService = inject(ProductService);
  searchResult: undefined|product[];

  ngOnInit(): void {
    let query  = this.activeRoute.snapshot.paramMap.get('query');    
    console.warn(query);
    
    query && this.product.searchProduct(query).subscribe((result) => {
        this.searchResult = result;
      });
  }
}
