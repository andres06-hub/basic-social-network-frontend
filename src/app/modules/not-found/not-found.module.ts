import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFounRoutingModule } from './not-found.routing.module';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    NotFounRoutingModule,
  ],
})
export class NotFoundModule { }
