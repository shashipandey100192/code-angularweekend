import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PagedesignComponent } from './pagedesign/pagedesign.component';

import { MyltileverformComponent } from './myltileverform/myltileverform.component';
import { ApidataComponent } from './apidata/apidata.component';
import { ErrorpageComponent } from './shareComponent/errorpage/errorpage.component';

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
  },
  {
    path:'apidata',
    component:ApidataComponent
  },
  {
    path:'**',
    component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
