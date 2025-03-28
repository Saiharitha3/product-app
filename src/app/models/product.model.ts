// src/app/models/product.model.ts
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
  }