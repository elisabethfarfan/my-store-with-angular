import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = "https://fakestoreapi.com/products";

  constructor() { }
}
