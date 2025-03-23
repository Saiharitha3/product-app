// src/app/services/product.service.ts
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
}