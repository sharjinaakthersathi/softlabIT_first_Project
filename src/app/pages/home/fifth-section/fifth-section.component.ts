import { Component } from '@angular/core';

@Component({
  selector: 'app-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.scss'],
})
export class FifthSectionComponent {
  products = [
    {
      name: 'chair',
      price: 129,
      description: 'nice',
      image:
        'https://p1.pxfuel.com/preview/653/702/399/rose-flower-flowers-red-rose-royalty-free-thumbnail.jpg',
    },

  ];
}
