import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-localdatapage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './localdatapage.component.html',
  styleUrl: './localdatapage.component.scss'
})
export class LocaldatapageComponent implements OnInit {

getdatas:any[]=[];

ngOnInit(): void {
  this.getdatas = JSON.parse(localStorage.getItem('myuser'));
  console.log(this.getdatas);
}

}
