import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import for *ngFor
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterOutlet], // Added CommonModule
})
/*export class AppComponent {
  title = 'product-app';

  // Sample products array
  products = [
    { name: 'Laptop', price: 1200, description: 'A high-performance laptop' },
    { name: 'Phone', price: 800, description: 'A latest-gen smartphone' },
    { name: 'Headphones', price: 150, description: 'Noise-canceling headphones' }
  ];

  // Function to handle "Add to Cart"
  addToCart(product: any) {
    console.log('Added to cart:', product);
    alert(`${product.name} added to cart!`);
  }
} */

  export class AppComponent {
    title = 'My Shop';
  
    products = [
      {
        id: 1,
        name: "Smartphone X",
        price: 799.99,
        description: "The latest smartphone with advanced features and high-performance camera."
      },
      {
        id: 2,
        name: "Laptop Pro",
        price: 1299.99,
        description: "Powerful laptop for professionals with high-speed processor and ample storage."
      },
      {
        id: 3,
        name: "Wireless Headphones",
        price: 199.99,
        description: "Noise-cancelling wireless headphones with 30-hour battery life."
      },
      {
        id: 4,
        name: "Smartwatch",
        price: 249.99,
        description: "Feature-rich smartwatch with health monitoring and GPS tracking."
      },
      {
        id: 5,
        name: "Bluetooth Speaker",
        price: 89.99,
        description: "Portable speaker with rich sound quality and waterproof design."
      }
    ];    
  
    addToCart(product: any) {
      console.log(`${product.name} added to cart.`);
    }
  }
  
