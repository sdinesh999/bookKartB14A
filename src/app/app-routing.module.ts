import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import  {BookfilterComponent}from './bookfilter/bookfilter.component';
import   {PricefilterComponent }from './pricefilter/pricefilter.component';
const routes: Routes = [{
  path:'',pathMatch:'full',redirectTo:'login'
},
{path:'bookfilter',component:BookfilterComponent},
{path:'pricefilter',component:PricefilterComponent},
{path:'home',component:HomeComponent,canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
