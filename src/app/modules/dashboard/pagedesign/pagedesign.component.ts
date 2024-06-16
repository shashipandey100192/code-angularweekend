import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-pagedesign',
  standalone: true,
  imports: [NgbNavModule,NgClass],
  templateUrl: './pagedesign.component.html',
  styleUrl: './pagedesign.component.scss'
})
export class PagedesignComponent {
  active:number=1
}
