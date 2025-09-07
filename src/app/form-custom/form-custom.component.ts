import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ChooseQuantityComponent } from '../choose-quantity/choose-quantity.component';

@Component({
  selector: 'app-form-custom',
  imports: [
    ChooseQuantityComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './form-custom.component.html',
  styleUrl: './form-custom.component.scss',
})
export class FormCustomComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: [''],
      totalQuantity: [60, [Validators.required, Validators.max(100)]],
    });
  }

  submit() {
    console.log(this.form.value);
    this.form.reset({
      title: '',
    });
  }
}
