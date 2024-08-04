import { Component, OnInit } from '@angular/core';
import { GeneralapiService } from '../../services/generalapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailspage',
  standalone: true,
  imports: [],
  templateUrl: './detailspage.component.html',
  styleUrl: './detailspage.component.scss'
})
export class DetailspageComponent implements OnInit {
constructor(private service:GeneralapiService,private http:ActivatedRoute){}
id:any;

singledatas:any;

ngOnInit(): void {
  // const id:any =this.http.snapshot.paramMap.get('id');
// this.id =this.http.snapshot.paramMap.get('id');
  // console.log(id);
  // console.log(this.http.snapshot);
  this.mysingledata();
}

mysingledata()
{
  this.id =this.http.snapshot.paramMap.get('id');
  this.service.getsingledata(this.id).subscribe((data)=>{
    console.log(data)
    this.singledatas=data;

  })
}


}
