
import { Component,Input, Output,EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-childpag',
  standalone: true,
  imports: [NgFor],
  templateUrl: './childpag.component.html',
  styleUrl: './childpag.component.scss'
})
export class ChildpagComponent {
@Input() abc:string=""
@Input() mydata:number[]=[];
@Input() myfun:any;

@Output() 
  myoutdata = new EventEmitter<any>()

  mypage()
  {
      this.myoutdata.emit("pppppppppppppppppppppppppppppppppp");
  }


}
