import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { sLogIn, sSignUp } from 'src/dataType';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogIn:boolean =false;
  authError:string= "";

constructor(private seller:SellerService, private router:Router){

}

ngOnInit(){ 
  this.seller.reloadSeller();
}


  sSignUp(data:sSignUp):void{

    this.seller.sellerSignUp(data)
    
  }
  sLogIn(data:sLogIn):void{
    this.authError = ""
    this.seller.sellerLogIn(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = "Email or Password is not correct";
      }
    })

  }
  openLogIn(){
    this.showLogIn = true;
  }
  openSignUp(){
    this.showLogIn = false;
  }

}
