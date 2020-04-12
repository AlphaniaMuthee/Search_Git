import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from '../app/userprofile/userprofile.component';
import {InvalidComponent} from './validity/validity.component'
import {RepositoriesComponent} from '../app/repository/repository.component'


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
