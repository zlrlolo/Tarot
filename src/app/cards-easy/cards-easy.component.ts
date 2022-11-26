import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-easy',
  templateUrl: './cards-easy.component.html',
  styleUrls: ['./cards-easy.component.css']
})
export class CardsEasyComponent implements OnInit {

  count = 22;
  angle = 2 * Math.PI / this.count;
  cards = new Array(this.count);
  focused: number[] = [];
  cot: number = 0;
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
    // console.log(result);
    return `${x}px ${y}px`;
  }


  getRotate(i: number) {
    return `${this.angle * i + Math.PI / 2}rad`;
  }

  click(i: number) {
    this.cot++;
    if (this.cot <= 3) {
      this.focused.push(i);
    }
    // let focus = i;

  }


}




