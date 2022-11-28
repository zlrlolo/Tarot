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
  index: number = 0;
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
    if (this.focused[0] == i) {
      return `600px 0`;
    }
    if (this.focused[1] == i) {
      return `500px -100px`;
    }
    if (this.focused[2] == i) {
      return `700px -100px`;
    }
    else {
      return `${x}px ${y}px`;
    }
  }


  getRotate(i: number) {
    if (this.focused.includes(i)) {
      return `-0deg`;
    } else {
      return `${this.angle * i + Math.PI / 2}rad`;
    }
  }

  click(i: number) {
    this.cot++;
    if (this.cot <= 5) {
      this.focused.push(i);
    }
    // let focus = i;
    this.index++;
  }


  getZindex(i: number) {
    if (this.focused[0] == i) {
      return `1`;
    }
    if (this.focused[1] == i) {
      return `2`;
    }
    if (this.focused[2] == i) {
      return `3`;
    }
    if (this.focused[3] == i) {
      return `4`;
    }
    if (this.focused[4] == i) {
      return `5`;
    } else {
      return''
    }
  }
}
