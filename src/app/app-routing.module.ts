import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { StartComponent } from './component/start/start.component';
import { HomeComponent } from './component/home/home.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';

const routes: Routes = [
  {path:'',component:StartComponent},
  {path:'home',component:HomeComponent},
  {path:'subscribe',component:SubscribeComponent},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
