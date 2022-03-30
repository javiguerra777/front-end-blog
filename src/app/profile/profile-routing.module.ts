import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainprofileComponent } from './mainprofile/mainprofile.component';
import { IndexComponent } from '../post/index/index.component';

const routes: Routes = [
  { path: 'profile', redirectTo: 'profile/mainprofile', pathMatch: 'full'},
  { path: 'profile/mainprofile', component: MainprofileComponent},
  { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
