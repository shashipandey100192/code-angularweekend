import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistorComponent } from './registor/registor.component';
import { TemplateformComponent } from './templateform/templateform.component';

const routes: Routes = [
  {
    path:'',
    component:LoginpageComponent
  },
  {
    path:'registor',
    component:RegistorComponent
  },
  {
    path:'template',
    component:TemplateformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
