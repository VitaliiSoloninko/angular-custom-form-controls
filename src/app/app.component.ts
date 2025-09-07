import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormCustomComponent } from './form-custom/form-custom.component';

@Component({
  selector: 'app-root',
  imports: [MatSlideToggleModule, FormCustomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-custom-form-controls';
}
