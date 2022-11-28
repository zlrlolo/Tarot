import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import data from '../../assets/result.json';


@Component({
  selector: 'app-rusult',
  templateUrl: './rusult.component.html',
  styleUrls: ['./rusult.component.css']
})
export class RusultComponent implements OnInit {
  panelOpenState = false;
  random: number[] = [];
  back = false;
  count = 21;
  cot = 5;


  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.reset = params['id'];
    // });
    // console.log(data.Tarot[0])
  }

  getRandom() {
    for (let i = 0; i < this.cot;) {
      let r = Math.floor(Math.random() * this.count);
      if (!(this.random.includes(r))) {
        this.random.push(r)
        i++;
      }
      this.back = true;
      console.log(this.random)
    }
  }

  getBackground(i: number) {
    if (this.back) {
      return 'url(\'../../assets/' + this.random[i] + '.png\')'

    }
    return 'url(\'../../assets/cardBack.png\')';
  }

  getCardID(i: number) {
    return data.tarotID[this.random[i]]
  }

  getCardDecoration(i: number) {
    return data.tarotDecoration[this.random[i]]
  }

  getCardDetails(i: number) {
    return data.tarotDetails[this.random[i]]
  }
}
