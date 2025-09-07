import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-choose-quantity',
  imports: [MatIconModule],
  templateUrl: './choose-quantity.component.html',
  styleUrl: './choose-quantity.component.scss',
})
export class ChooseQuantityComponent {
  quantity = 0;

  @Input()
  increment: number = 1;

  onAdd() {
    this.quantity += this.increment;
  }

  onRemove() {
    this.quantity -= this.increment;
  }
}
