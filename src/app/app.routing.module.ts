import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-details/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserChangeComponent } from './user-details/user-change.component';



const routes: Routes = [
  { path: 'users', component: UserDetailsComponent },
  { path: 'add', component: UserAddComponent },
  { path: 'change', component: UserChangeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {}

