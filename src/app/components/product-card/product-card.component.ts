// src/app/components/product-card/product-card.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productSelected = new EventEmitter<Product>();

  onSelect(): void {
    this.productSelected.emit(this.product);
  }
}