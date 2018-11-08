import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserChangeComponent } from './user-details/user-change.component';
import { HttpModule } from '@angular/http';
import { UserApiService } from './service/user-api.service';
import { UserAddComponent } from './user-details/user-add.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserAddComponent,
    UserChangeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
