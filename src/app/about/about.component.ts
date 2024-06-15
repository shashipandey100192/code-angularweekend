import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

first:string = "kumar singh";
num:number = 800;
myarry:string[]=["kumar","singh","mohan"];
working:boolean=true;
abc:any ='50px';
xyz:boolean=true;

}
