import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

import  {BookfilterComponent}from './bookfilter/bookfilter.component';
import   {PricefilterComponent }from './pricefilter/pricefilter.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'app',component:AppComponent,canActivate:[AuthGuard]},
  {path:'bookfilter',component:BookfilterComponent},
  {path:'pricefilter',component:PricefilterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
