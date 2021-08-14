import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';
import { SnackbarService } from '../services/snackbar.service';
import { SubscriptionService } from '../services/subscription.service';

@Component({
  selector: 'app-snackbar-comp',
  templateUrl: './snackbar-comp.component.html',
  styleUrls: ['./snackbar-comp.component.scss']
})
export class SnackbarCompComponent implements OnInit {

  userId:any;
  bookId:any;

  constructor(private snackBarService:SnackbarService,
    private cartService:AddToCartService,
    private subscriptionService:SubscriptionService) { }

  ngOnInit(): void {
  }

  popup(message:any, action:any) {
    this.snackBarService.openSnackBar(message, action);
  }

  addToCart() {
    this.cartService.addProducts(this.userId, this.bookId).subscribe(
      result => {
        this.subscriptionService.totalCartItem$.next(result);
        this.snackBarService.openSnackBar('One Item added to cart','success');
      }, error => {
        console.log('Error ocurred while addToCart data', 'error');
      });
  }

}
