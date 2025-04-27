import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-auth',
  imports: [FormsModule],
  providers: [SellerService],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css',
})
export class SellerAuthComponent {
  constructor(private seller: SellerService, private router: Router) {}

  signUp = (data: object) => {
    console.warn(data);
    this.seller.userSignup(data)
  };
}
