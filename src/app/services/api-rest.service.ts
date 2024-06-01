import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private apiUrl: string = 'https://fakestoreapi.com';

  constructor(private _httpClient: HttpClient) { }

  public getProducts(sort?:string):Observable<Product[]>{
    const param = sort ? sort : 'asc';
    return this._httpClient.get<Product[]>(`${this.apiUrl}/products?sort=${param}`);
  }
  public getProductById(id:number):Observable<Product>{
    return this._httpClient.get<Product>(`${this.apiUrl}/products/${id}`);
  }
  public getCategories():Observable<Category>{
    return this._httpClient.get<Category>(`${this.apiUrl}/products/categories`);
  }
  public postProduct(product:Product):Observable<Product>{
    return this._httpClient.post<Product>(`${this.apiUrl}/products`, product);
  }
  public putProduct(product:Product, id:number):Observable<Product>{
    return this._httpClient.put<Product>(`${this.apiUrl}/products/${id}`, product);
  }
  public deleteProduct(id:number):Observable<Product>{
    return this._httpClient.delete<Product>(`${this.apiUrl}/products/${id}`);
  }
}
