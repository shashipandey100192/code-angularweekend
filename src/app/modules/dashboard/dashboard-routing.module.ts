import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PagedesignComponent } from './pagedesign/pagedesign.component';

import { MyltileverformComponent } from './myltileverform/myltileverform.component';

const routes: Routes = [
  {
    path:'',
    component:LandingpageComponent
  },
  {
    path:'pagedesign',
    component:PagedesignComponent
  },
  {
    path:'multiform',
    component:MyltileverformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
