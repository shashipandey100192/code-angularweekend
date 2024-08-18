import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mychart',
  standalone: true,
  imports: [],
  templateUrl: './mychart.component.html',
  styleUrl: './mychart.component.scss'
})
export class MychartComponent implements OnInit{


users1:string[]=["ravi","mohan","panakj","kumar"];
users2:number[]=[10,20,30,50,70,50,40];
users:any[]=[
  {
    id:1,
    name:"ravi",
    age:20,
    phone:'10214545'
  },
  {
    id:2,
    name:"ravi",
    age:20,
    phone:'10214545'
  }
];


ngOnInit(): void {
  localStorage.setItem("myuser",JSON.stringify(this.users));


}





}
