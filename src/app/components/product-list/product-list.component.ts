import { OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ProductService } from "../../services/product.service";

export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // IMPORTANT: You must subscribe to the observable
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}