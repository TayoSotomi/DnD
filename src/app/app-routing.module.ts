import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutDetailsComponent } from './Component/donut-details/donut-details.component';
import { DonutsComponent } from './Component/donuts/donuts.component';
import { FamousPeopleComponent } from './Component/famous-people/famous-people.component';

  const routes: Routes = [
    { path: 'donuts', component: DonutsComponent },
    { path: 'donuts/:id', component:DonutDetailsComponent },
    { path: '', redirectTo: '/donuts', pathMatch:'full'},
    

    { path: 'devs', component: FamousPeopleComponent },
    { path: 'devs/:id', component:FamousPeopleComponent },
    { path: '', redirectTo: '/devs', pathMatch:'full'},
    
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
