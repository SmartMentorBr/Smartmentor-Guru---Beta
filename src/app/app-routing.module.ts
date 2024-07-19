import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlansComponent } from './pages/plans/plans.component';
const routes: Routes = [
  { path:'Home', component: HomeComponent },
  { path: 'Plans', component: PlansComponent },
  {
		path: '',
		redirectTo: '/Home',
		pathMatch: 'full'
	},
	// {path: '**', redirectTo: '/Home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
