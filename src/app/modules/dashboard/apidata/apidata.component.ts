import { Component, OnInit } from '@angular/core';
import { GeneralapiService } from '../../services/generalapi.service';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apidata',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './apidata.component.html',
  styleUrl: './apidata.component.scss'
})
export class ApidataComponent implements OnInit{

  constructor(private genapi:GeneralapiService, private myhttp:HttpClient){}

myalldata:any[]=[];

  ngOnInit(): void {
    this.mydata();

  }


  mydata()
  {
    this.genapi.mygetdata().subscribe((d:any)=>{
     this.myalldata=d;
    })
  }

  deletecored(id:any)
  {
    this.genapi.mydelete(id).subscribe((d:any)=>{
      this.myalldata = this.myalldata.filter(y => y.id!==id)
      console.log(d);
      // this.mydata();

    })

  }



}
