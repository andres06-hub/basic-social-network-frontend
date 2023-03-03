import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    FooterComponent,
  ]
})
export class SharedModule { }