import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import {UserprofileComponent} from '../userprofile/userprofile.component';
import {ValidityComponent} from '../validity/validity.component'
import {RepositoryComponent} from '../repository/repository.component'

const routes: Routes = [
  { path: 'userprofile', component: UserprofileComponent},
  { path: 'repos', component: RepositoryComponent},
  { path:'**', component:ValidityComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class RoutingModule { }
