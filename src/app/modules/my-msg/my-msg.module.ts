import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMsgRoutingModule } from './my-msg-routing.module';
import { MyMsgComponent } from './my-msg.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MyMsgComponent
  ],
  imports: [
    CommonModule,
    MyMsgRoutingModule,
    SharedModule
  ]
})
export class MyMsgModule { }
