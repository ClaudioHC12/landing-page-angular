import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, listProducts } from '../products/products.mock';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productDetails?: Product;
  loading: boolean = true;

  constructor(private _route: ActivatedRoute) { }
  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {
        this.productDetails = listProducts.find(x => (x.id === parseInt(params['productId'])));
        console.log(this.productDetails);
        this.loading = false;
      });
    }, 600);
  }
}