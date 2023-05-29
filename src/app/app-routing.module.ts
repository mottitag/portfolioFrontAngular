import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/skeleton/login/login.component';
import { GuardGuard } from './services/auth/guard.guard';

const routes: Routes = [
  {path:'portfolio', component:PortfolioComponent, canActivate:[GuardGuard]},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
