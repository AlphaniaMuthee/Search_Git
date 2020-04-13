import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ServiceService} from '../app/userprofile/service.service'
import { FormsModule } from '@angular/forms';
import {RoutingModule} from './routing/routing.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormComponent } from './form/form.component';
import { RepositoryComponent } from './repository/repository.component';
import { ValidityComponent } from './validity/validity.component';
import { UnderlineDirective } from './underline.directive';
import { CountPipe } from './count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    FormComponent,
    RepositoryComponent,
    ValidityComponent,
    UnderlineDirective,
    CountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
