import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MynavComponent } from '../../modules/dashboard/mynav/mynav.component';
import { MyfooterComponent } from '../../modules/dashboard/shareComponent/myfooter/myfooter.component';
import { SidebarComponent } from '../../modules/dashboard/shareComponent/sidebar/sidebar.component';

@Component({
  selector: 'app-fullpage',
  standalone: true,
  imports: [RouterOutlet,MynavComponent,MyfooterComponent,SidebarComponent],
  templateUrl: './fullpage.component.html',
  styleUrl: './fullpage.component.scss'
})
export class FullpageComponent {

}
