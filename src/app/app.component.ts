import { Component } from '@angular/core';
import { AddToCartService } from './services/add-to-cart.service';
import { SubscriptionService } from './services/subscription.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookKartB14A';
  productList:any;
  
   totalCartItem:number=0;
  url = "https://bookcart.azurewebsites.net/upload/";

  constructor(private cart:AddToCartService,
    private subscriptionService:SubscriptionService){

  }
ngOnInit():void{
  this.cart.getProducts(2)
    .subscribe(response=>{

      // this.totalCartItem=response.length;

      this.productList=response;
    })
  }
}



