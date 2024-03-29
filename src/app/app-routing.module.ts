import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* 追加　*/
import { DashboardComponent } from './dashboard/dashboard.component';
import { CityAddComponent } from './city/city-add/city-add.component';
import { CityEditComponent } from './city/city-edit/city-edit.component';

const routes: Routes = [
  /* 追加　*/
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'city/add', component: CityAddComponent},
  { path: 'city/:id/edit', component: CityEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }