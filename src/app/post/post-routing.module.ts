import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { MainprofileComponent } from '../profile/mainprofile/mainprofile.component';
import { MainLoginPageComponent } from '../login/main-login-page/main-login-page.component';

const routes: Routes = [
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent},
  { path: 'post/:postId/view', component: ViewComponent},
  { path: 'post/create', component: CreateComponent},
  { path: 'post/:postId/edit', component: EditComponent},
  { path: 'profile', redirectTo: 'profile/mainprofile', pathMatch: 'full'},
  { path: 'profile/mainprofile', component: MainprofileComponent},
  {path:'login/main-login-page', component: MainLoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
