import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    PostComponent,
  ]
})
export class SharedModule { }
