import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyMsgComponent } from './my-msg.component';

const routes: Routes = [{ path: '', component: MyMsgComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMsgRoutingModule { }
