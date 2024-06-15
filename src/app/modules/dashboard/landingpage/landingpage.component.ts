import { Component } from '@angular/core';
import { NgFor,NgClass,DecimalPipe} from '@angular/common';


@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NgFor,NgClass,DecimalPipe],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
phone:number = 58745955478
mydata = [
  {name:'kumar',age:10,status:'pending'},
  {name:'ravi',age:10,status:'success'},
  {name:'pankaj',age:10,status:'unaprove'},
  {name:'rohit',age:10},
  {name:'kumar',age:10,status:'success'},
  {name:'kumar',age:20.3972145},
];




}
