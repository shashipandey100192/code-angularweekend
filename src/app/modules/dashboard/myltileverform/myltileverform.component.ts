import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators,FormBuilder } from '@angular/forms';
import { MycolorDirective } from '../../mydirective/mycolor.directive';
import { AbstractControl,ValidationErrors } from '@angular/forms';
import { NgIf } from '@angular/common';

import { customValidator,phonevalidation } from '../../customvalidation/customvalidator';

// export function customValidator(control: AbstractControl): ValidationErrors | null {
//   const valid = /[a-zA-Z]/.test(control.value);
//   return valid ? null : { custom: true };
// }



@Component({
  selector: 'app-myltileverform',
  standalone: true,
  imports: [ReactiveFormsModule,MycolorDirective,NgIf],
  templateUrl: './myltileverform.component.html',
  styleUrl: './myltileverform.component.scss'
})
export class MyltileverformComponent {


  // myform = new FormGroup({
  //   email:new FormControl(null,Validators.required),
  //   fullname:new FormControl(null),
  //   personal:new FormGroup({
  //     phone:new FormControl(null),
  //     age:new FormControl(null)
  //   })
  // });

form :FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, customValidator]],
      phoneno:['', [Validators.required, phonevalidation]]
    });
  }


  get username() {
    return this.form.get('username');
  }
  get phoneno() {
    return this.form.get('phoneno');
  }


  onSubmit():void {
    if (this.form.valid) {
        console.log(this.form.value);
    } else {
      console.log("error mage");
    }
  }



  // mysubmit():void
  // {
  //   console.log(this.myform.value);

  // }


}
