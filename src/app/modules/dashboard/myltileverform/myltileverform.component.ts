import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MycolorDirective } from '../../mydirective/mycolor.directive';

@Component({
  selector: 'app-myltileverform',
  standalone: true,
  imports: [ReactiveFormsModule,MycolorDirective],
  templateUrl: './myltileverform.component.html',
  styleUrl: './myltileverform.component.scss'
})
export class MyltileverformComponent {


  myform = new FormGroup({
    email:new FormControl(null,Validators.required),
    fullname:new FormControl(null),
    personal:new FormGroup({
      phone:new FormControl(null),
      age:new FormControl(null)
    })
  });


  mysubmit():void
  {
    console.log(this.myform.value);

  }


}
