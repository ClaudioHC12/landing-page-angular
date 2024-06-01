import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product.model';
import { ApiRestService } from '../../../services/api-rest.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-api',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './productos-api.component.html',
  styleUrl: './productos-api.component.css'
})
export class ProductosApiComponent implements OnInit {

  protected productsList: Product[] = [];

  constructor(private _apiServices: ApiRestService) {

  }
  ngOnInit(): void {
    this._apiServices.getProducts().subscribe((data:Product[]) => {
      this.productsList = data;
      //console.log(data);
    });
      
  }

}
