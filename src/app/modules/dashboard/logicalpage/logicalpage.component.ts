import { Component } from '@angular/core';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import {FormsModule, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-logicalpage',
  standalone: true,
  imports: [NgSwitch,NgSwitchDefault,NgSwitchCase,FormsModule],
  templateUrl: './logicalpage.component.html',
  styleUrl: './logicalpage.component.scss'
})
export class LogicalpageComponent {

  name:string="pankaj";


// myform = new FormGroup({
//   abc:new FormControl("yyy")
// })

}
