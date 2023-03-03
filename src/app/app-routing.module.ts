import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'signup', loadChildren: ()=> import('./modules/signup/signup.module').then(m => m.SignupModule)},
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  { path: 'myPosts', loadChildren: () => import('./modules/my-msg/my-msg.module').then(m => m.MyMsgModule)},
  { path: 'allPosts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule) },
  { path: 'not-found', loadChildren: () => import('./modules/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
