import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  totalCartItem:number=0;
  baseURL:string;
  constructor(private http:HttpClient) { 
    this.baseURL = "https://bookcart.azurewebsites.net/api/book";
  }
 productUrl ="https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/19408/2";

 addProducts(userId: number, bookId: number) {
  return this.http.post<number>(this.productUrl,{});
}

getProducts(userId:number):Observable<any>{
  return this.http.get<any>(this.baseURL).pipe(map((response:any)=>{
    // this.count=response.length;
  return response;
  }))
}
}

