import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrestePostRoutingModule } from './creste-post-routing.module';
import { CrestePostComponent } from './creste-post.component';


@NgModule({
  declarations: [
    CrestePostComponent
  ],
  imports: [
    CommonModule,
    CrestePostRoutingModule
  ]
})
export class CrestePostModule { }
