import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserprofileComponent} from '../app/userprofile/userprofile.component';
import {ValidityComponent} from './validity/validity.component'
import {RepositoryComponent} from '../app/repository/repository.component'


const routes: Routes = [
  { path: 'userprofile', component: UserprofileComponent},
  { path: 'repos', component: RepositoryComponent},
  { path:'**', component:ValidityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
