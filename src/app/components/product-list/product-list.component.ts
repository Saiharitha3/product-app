// src/app/components/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = true;

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.loading = false;
      }
    );
  }

  onProductSelected(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }
}