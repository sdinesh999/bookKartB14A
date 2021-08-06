import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  baseURL:string;
  constructor(private http:HttpClient) { 
    this.baseURL = "https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/37879/2";
  }

  //  addProducts(){
//    return this.http.post<Number>(this.baseURL + ``)
//  }
//  addBookToCart(userId: number, bookId: number) {
//   return this.http.post<number>(this.baseURL + `addToCart/${userId}/${bookId}`, {});
// }

getProducts(userId:number):Observable<any>{
  return this.http.get<any>(this.baseURL).pipe(map((response:any)=>{
    // this.count=response.length;
  return response;
  }))
}
}

