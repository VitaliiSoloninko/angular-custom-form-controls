import { Component } from '@angular/core';
import { ChooseQuantityComponent } from '../choose-quantity/choose-quantity.component';

@Component({
  selector: 'app-form-custom',
  imports: [ChooseQuantityComponent],
  templateUrl: './form-custom.component.html',
  styleUrl: './form-custom.component.scss',
})
export class FormCustomComponent {}
