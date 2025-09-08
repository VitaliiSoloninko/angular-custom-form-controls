import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ChooseQuantityComponent } from '../choose-quantity/choose-quantity.component';

@Component({
  selector: 'app-form-custom',
  imports: [
    ChooseQuantityComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    JsonPipe,
  ],
  templateUrl: './form-custom.component.html',
  styleUrl: './form-custom.component.scss',
})
export class FormCustomComponent implements OnInit {
  form!: FormGroup;
  orderInfo: any = null;

  foods: any = [
    { value: 'steak', viewValue: 'Steak' },
    { value: 'pizza', viewValue: 'Pizza' },
    { value: 'tacos', viewValue: 'Tacos' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      food: [''],
      totalQuantity: [10, [Validators.required, Validators.max(100)]],
      comment: [''],
    });
  }

  submit() {
    console.log(this.form.value);
    this.orderInfo = this.form.value;
    this.form.reset({
      comment: '',
    });
  }
}
