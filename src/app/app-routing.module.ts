import { WeatherComponent } from './weather/weather.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'mainpage', component: WeatherComponent }
];
@NgModule({
   imports: [
     RouterModule.forRoot(routes, { useHash: true })
   ],
   exports: [RouterModule]
})
export class AppRoutingModule { }
