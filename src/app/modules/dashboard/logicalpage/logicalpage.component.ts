import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import {FormsModule, FormControl, FormGroup } from '@angular/forms';
import { NgIf } from '@angular/common';
import { stringify } from 'querystring';


@Component({
  selector: 'app-logicalpage',
  standalone: true,
  imports: [NgSwitch,NgSwitchDefault,NgSwitchCase,FormsModule,NgIf],
  templateUrl: './logicalpage.component.html',
  styleUrl: './logicalpage.component.scss'
})
export class LogicalpageComponent implements OnInit{

  name:string="kumar";
  course:string="mern";

a:boolean=true;
age:number=20;

b:boolean=false;

ngOnInit(): void {
  this.c;

}

d:string="this is my title of application";
c = setTimeout(()=>{
  this.b=true;
  this.d="99999999999999999999999999999";
},5000)


// myform = new FormGroup({
//   abc:new FormControl("yyy")
// })

}
