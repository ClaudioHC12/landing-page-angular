import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRestService } from '../../../services/api-rest.service';
import { Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto-details-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-details-api.component.html',
  styleUrl: './producto-details-api.component.css'
})
export class ProductoDetailsApiComponent implements OnInit {

  productDetails?: Product;
  loading: boolean = true;

  constructor(
    private _route: ActivatedRoute,
    private _apiServices: ApiRestService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      //console.log(params['id']);
      this._apiServices.getProductById(parseInt(params['id'])).subscribe({
        next: (data: Product) => {
          //console.log(data);
          this.productDetails = data;
          this.loading = false;
        },
        error: (error: any) => {
          console.log(error);
          this.loading = false;
        }
      })
    });
  }
}
