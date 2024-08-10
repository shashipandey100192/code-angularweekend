import { Component, OnInit } from '@angular/core';
import { NgFor,NgClass,DecimalPipe} from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { MynavComponent } from '../mynav/mynav.component';
import { RouterOutlet } from '@angular/router';
import { GeneralapiService } from '../../services/generalapi.service';


interface Country {
	name: string;
	flag: string;
	area: number;
	population: number;
}

interface Mydatatype {
  name : string;
  age: number;
  status:string
}


const COUNTRIES: Country[] = [
	{
		name: 'Russia',
		flag: 'f/f3/Flag_of_Russia.svg',
		area: 17075200,
		population: 146989754,
	},
	{
		name: 'Canada',
		flag: 'c/cf/Flag_of_Canada.svg',
		area: 9976140,
		population: 36624199,
	},
	{
		name: 'United States',
		flag: 'a/a4/Flag_of_the_United_States.svg',
		area: 9629091,
		population: 324459463,
	},
	{
		name: 'China',
		flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
		area: 9596960,
		population: 1409517397,
	},
];




const datalist: Mydatatype[]= [
  {name:'kumar',age:10,status:'pending'},
  {name:'ravi',age:10,status:'success'},
  {name:'pankaj',age:10,status:'unaprove'},
  {name:'rohit',age:10,status:'success'},
  {name:'kumar',age:10,status:'success'},
  {name:'kumar',age:20.3972145,status:'pending'},
];



@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [NgFor,NgClass,DecimalPipe,NgbAccordionModule,MynavComponent,RouterOutlet],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent implements OnInit{

constructor(private myservice : GeneralapiService){}

	
phone:number = 58745955478
countries = COUNTRIES;
mydata = datalist

a:number=500
msg:string="this is first condiotion";
msg1:string ="this is second tiondion";


myjson:any= [
	{name:"ravi",age:50},
	{name:"ravi",age:50},
	{name:"ravi",age:50},
	{name:"ravi",age:50},
	{name:"ravi",age:50},
	{name:"ravi",age:50},
	{name:"ravi",age:50},
	];
	
age:number=500;


abc:boolean= true;


mydatas1:any[]=[];

ngOnInit(): void {
		this.mydatas();
}


mydatas()
{
	this.myservice.mygetdata().subscribe((d:any)=>{
		this.mydatas1 = d;
	})
}

mylocaldatas:any;

getlocaldata():void
{
	this.mylocaldatas = JSON.parse(window.localStorage.getItem("mykey"));
	console.log(this.mylocaldatas);
}


}


