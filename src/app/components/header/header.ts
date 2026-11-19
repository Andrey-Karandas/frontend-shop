import { Component } from '@angular/core';
import { Basket } from "../basket/basket";

@Component({
  imports: [Basket],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {}
