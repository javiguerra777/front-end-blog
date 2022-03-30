import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLoginPageComponent } from './main-login-page/main-login-page.component';
import { NewUserComponent } from './new-user/new-user.component';
import { IndexComponent } from '../post/index/index.component';

const routes: Routes = [
  { path: 'login', redirectTo: 'login/main-login-page', pathMatch: 'full'},
  { path: 'login/main-login-page', component: MainLoginPageComponent},
  {path: 'login/new-user', component: NewUserComponent},
  { path: 'post/index', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
