import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { StartComponent } from './component/start/start.component';
import { HomeComponent } from './component/home/home.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { LoginComponent } from './component/login/login.component';
 import { ScanneComponent } from './component/scanne/scanne.component';
 import { AuthService as AuthGuard } from './service/auth.service';
import { ProductComponent } from './component/product/product.component';
const routes: Routes = [
  {path:'',component:StartComponent},
  {path:'home',component:HomeComponent},
  {path:'subscribe',component:SubscribeComponent},
  {path:'login',component:LoginComponent},
  {path:'scan',component:ScanneComponent,canActivate:[AuthGuard]},
  {path:'product',component:ProductComponent},
   {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
