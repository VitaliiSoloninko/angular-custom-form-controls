import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-custom-form-controls';
}
