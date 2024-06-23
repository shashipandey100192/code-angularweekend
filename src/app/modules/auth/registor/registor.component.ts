import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule,ReactiveFormsModule,FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registor',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule,FormControl,FormGroup],
  templateUrl: './registor.component.html',
  styleUrl: './registor.component.scss'
})
export class RegistorComponent implements OnInit {
  


ngOnInit(): void {

}



}


