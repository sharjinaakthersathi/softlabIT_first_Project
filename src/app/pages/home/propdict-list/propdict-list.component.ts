import { Component } from '@angular/core';

@Component({
  selector: 'app-prpdict-list',
  templateUrl: './prpdict-list.component.html',
  styleUrls: ['./prpdict-list.component.scss'],
})
export class PrpdictListComponent {
  products: any = [
    { name: 'Chair', price: 120, discount: 110, status: 'pending' },
    { name: 'Table', price: 150, discount: 20, status: 'approved' },
    { name: 'Sofa', price: 130, discount: 12, status: 'pending' },
  ];
}
