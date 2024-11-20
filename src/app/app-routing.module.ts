import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { UsersComponent } from './components/users/users.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'forms', component:FormsComponent},
  {path:'users', component:UsersComponent},

  {path:'add', component:AddUserComponent},
  {path:'user-list', component:UserListComponent},
  {path:'edit-user/:id', component:EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
