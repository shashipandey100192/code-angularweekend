import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-basetemplate',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './basetemplate.component.html',
  styleUrl: './basetemplate.component.scss'
})
export class BasetemplateComponent {

}
