import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType:string ="default";
  sellerName:string ='';
  router: Router = inject(Router);
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
}
