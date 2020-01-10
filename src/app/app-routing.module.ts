import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LivechatComponent } from './livechat/livechat.component';


const routes: Routes = [
  {path: 'login' , component: LoginComponent},
  {path: 'livechat' , component: LivechatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
