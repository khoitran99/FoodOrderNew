import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/messenger.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    //{id: 1, productId: 1, productName: 'Test 1' ,qty: 4, price: 30000},
    //{id: 2, productId: 3, productName: 'Test 2', qty: 5, price: 150000},
    //{id: 3, productId: 2, productName: 'Test 3', qty: 3, price: 90000},
   // {id: 4, productId: 4, productName: 'Test 4', qty: 2, price: 60000},

  ];
  cartTotal = 0
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe(product => {
      console.log(product)
    })

    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

}
