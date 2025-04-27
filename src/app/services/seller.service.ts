import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  isSellerLoggedId = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) {}
  userSignup = (data: any) => {
    this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        console.log(result);
        if (result) {
          this.isSellerLoggedId.next(true);
        }
      });
  };
}
