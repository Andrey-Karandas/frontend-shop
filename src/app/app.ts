import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { CartModal } from './components/cart-modal/cart-modal';
import { OrderModal } from './components/order-modal/order-modal';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductList,
    CartModal,
    OrderModal,
    Header,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}