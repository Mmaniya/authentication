import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OauthInitComponent } from './oauth-init/oauth-init.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'oauth', component: OauthInitComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
