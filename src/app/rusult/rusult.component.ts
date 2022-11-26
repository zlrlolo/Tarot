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
  Tarot: string[] = [
    "愚者",
    "魔术师",
    "女祭司",
    "女皇",
    "皇帝",
    "教皇",
    "恋人",
    "战车",
    "力量",
    "隐者",
    "命运之轮",
    "正义",
    "倒吊者",
    "死神",
    "节制",
    "恶魔",
    "塔",
    "星星",
    "月亮",
    "太阳",
    "审判",
    "世界",
  ]
  // private reset: string='';

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
    const count = 21;
    const cot = 5;
    for (let i = 0; i <= cot; i++) {
      let r = Math.floor(Math.random() * count);
      if (this.random.indexOf(r)) {
        this.random.push(r)
      }
    }
    this.back = true;
    console.log(this.random)
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

  getCardDecoration(i:number){
    return data.tarotDecoration[this.random[i]]
  }

  getCardDetails(i: number) {
    return data.tarotDetails[this.random[i]]
  }
}
