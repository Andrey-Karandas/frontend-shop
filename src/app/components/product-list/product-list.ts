import { Component, OnInit, signal } from '@angular/core';
import { ProductService, Product } from '../../services/product';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-product-list',
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})

export class ProductList implements OnInit {
  products = signal<Product[]>([]);
  loading = signal(true);
  allProducts: Product[] = [];

  private currentCount = 10;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.allProducts = data;

        this.products.set(data.slice(0, this.currentCount));
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Помилка при завантаженні:', err);
        this.loading.set(false);
      }
    });
  }

  loadMore() : void {
    if(this.currentCount >= this.allProducts.length) {
      return
    }

    this.currentCount += 10;
    this.products.set(this.allProducts.slice(0, this.currentCount));
  }

  getDiscountedPrice(price : number, discount : number) : number {
    return price - (price * (discount / 100));
  }
}
