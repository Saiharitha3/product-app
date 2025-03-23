// src/app/components/product-detail/product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe(
      product => {
        this.product = product;
        this.loading = false;
      },
      error => {
        this.error = true;
        this.loading = false;
        console.error('Error loading product:', error);
      }
    );
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}