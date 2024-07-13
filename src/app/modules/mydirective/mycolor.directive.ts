import { Directive } from '@angular/core';
import { HostListener,Renderer2,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMycolor]',
  standalone: true
})
export class MycolorDirective {

  constructor(private myel:ElementRef,private render:Renderer2) { }
  @HostListener('mouseover') onMouseOver() {
    this.render.setStyle(this.myel.nativeElement,'color','red');
    this.render.setStyle(this.myel.nativeElement,'backgroundColor','green');
}

@HostListener('mouseout') onMouseOut() {
  this.render.setStyle(this.myel.nativeElement,'color','blue');
  this.render.setStyle(this.myel.nativeElement,'backgroundColor','orange');
}


}
