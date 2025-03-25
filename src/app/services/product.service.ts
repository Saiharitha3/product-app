/* src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'assets/mock-products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        map(products => {
          const product = products.find(p => p.id === id);
          if (!product) {
            throw new Error(`Product with id ${id} not found`);
          }
          return product;
        }),
        catchError(this.handleError<Product>(`getProduct id=${id}`))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}*/

// product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root', // ensures the service is available application-wide
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 9.99, description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', price: 19.99, description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', price: 29.99, description: 'Description for Product 3' },
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    // Return an observable of the products array
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    // Return a single product by ID
    const product = this.products.find((p) => p.id === id);
    return of(product);
  }
}


