import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PagedesignComponent } from './pagedesign/pagedesign.component';

import { MyltileverformComponent } from './myltileverform/myltileverform.component';
import { ApidataComponent } from './apidata/apidata.component';
import { ErrorpageComponent } from './shareComponent/errorpage/errorpage.component';
import { LogicalpageComponent } from './logicalpage/logicalpage.component';
import { DetailspageComponent } from './detailspage/detailspage.component';
import { ParentpageComponent } from './parentpage/parentpage.component';

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
    path:'logical',
    component:LogicalpageComponent
  },
  {
    path:'apidata/details/:id',
    component:DetailspageComponent
  },
  {
    path:'parent',
    component:ParentpageComponent
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
