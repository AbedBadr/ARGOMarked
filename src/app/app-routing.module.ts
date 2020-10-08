import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'search', component: SearchItemsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'messages', component: MessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
