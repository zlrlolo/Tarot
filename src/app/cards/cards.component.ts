import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  count = 23;
  angle = 2 * Math.PI / this.count;

  cards = new Array(this.count);
  focused: number[]=[] ;
  cot:number=0;
  constructor() {
  }

  ngOnInit(): void {
    // for (let i = 0; i < this.count; i++) {
    //   const x = Math.cos(this.angle * i) * 20;
    //   const y = Math.sin(this.angle * i) * 20;
    //   console.log(x);
    //   console.log(y);
    // }
  }

  getTranslate(i: number) {
    const angle = this.angle * i;
    const x = Math.cos(angle) * 200;
    const y = Math.sin(angle) * 200;
    const result = `${x}px ${y}px`
    // console.log(result);
    return result;
  }

  getRotate(i: number) {
    return `${this.angle * i + Math.PI / 2}rad`;
  }

  click(i: number) {
     this.cot++;
     if(this.cot<=5)
     {
       this.focused.push(i);
     }
    // let focus = i;

  }
}




