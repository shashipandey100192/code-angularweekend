import { Component } from '@angular/core';
import { ChildpagComponent } from '../childpag/childpag.component';

@Component({
  selector: 'app-parentpage',
  standalone: true,
  imports: [ChildpagComponent],
  templateUrl: './parentpage.component.html',
  styleUrl: './parentpage.component.scss'
})
export class ParentpageComponent {

first:string="this is  parent value";
myarr:number[]=[10,20,30,50,40,50,80];

myfunc()
{
  alert("welcom to pass");
}

xyz:string="";


}
