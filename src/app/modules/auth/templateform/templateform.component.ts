import { Component, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [RouterLink,FormsModule,JsonPipe],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.scss'
})
export class TemplateformComponent {

  myforms:any ={ 
      email:"",
      fullname:"",
      phone:"",
      course:""

}
myformsubmit()
{
  // this.myforms.value;
  // console.log(this.myforms);
  if(this.myforms.email.value==null && this.myforms.fullname.value==null && this.myforms.email.value==null)
  {
    console.log("invaid");
  }
  else
  {
    console.log(this.myforms);
  }

}


  
 
}
