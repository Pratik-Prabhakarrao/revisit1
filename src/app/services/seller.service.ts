import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { sSignUp } from 'src/dataType';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }

  sellerSignUp(data:sSignUp){
    return this.http.post("http://localhost:3000/seller", data)
    
    
  }
}
