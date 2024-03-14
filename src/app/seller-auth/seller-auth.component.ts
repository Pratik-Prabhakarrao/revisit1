import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { sSignUp } from 'src/dataType';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

constructor(private seller:SellerService, private router:Router){

}

  sSignUp(data:sSignUp):void{

    this.seller.sellerSignUp(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['seller-home'])
      }

      
    });
    
  }
}
