import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [RouterLink,MatGridListModule,FormsModule,ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})
export class LoginpageComponent {

  tiles: Tile[] = [
    {text: 'One', cols: 6, rows: 1, color: 'lightblue'},

  ];
}
