import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-result-easy',
  templateUrl: './result-easy.component.html',
  styleUrls: ['./result-easy.component.css']
})
export class ResultEasyComponent implements OnInit {
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
    return this.Tarot[this.random[i]]
  }

}

