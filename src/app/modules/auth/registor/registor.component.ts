import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {ReactiveFormsModule,FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registor',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './registor.component.html',
  styleUrl: './registor.component.scss'
})
export class RegistorComponent implements OnInit {
  
  myform = new FormGroup({
    email: new FormControl(''),
    fullname: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
    phone : new FormControl(''),
    course : new FormControl('')
  })

  myformsubmit()
  {
    console.log(this.myform);
  }


ngOnInit(): void {

}



}


