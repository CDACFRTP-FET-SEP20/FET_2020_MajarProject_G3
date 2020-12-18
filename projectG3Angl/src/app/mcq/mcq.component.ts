import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Mcq } from './mcq';
import { ActivatedRoute, Router } from '@angular/router';
import { McqService } from 'src/app/mcq.service';
import { AddtoFavService } from '../addto-fav.service';
import { Addfav } from '../addfav';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// import { Score } from './score.model';
import { Subscription, TimeInterval, timer } from 'rxjs';
import { Time } from '@angular/common';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.scss'],
})
export class McqComponent implements OnInit {
  remainingTime: any = [];
  countDown: Subscription = new Subscription();
  counter: any;
  tick = 1000;

  userName: any;

  qidid: any;
  ques: any = [];
  mydata: any;
  favData: any;
  uid: number = 2;
  qid: number = 1;
  userMail: string = 'aishwaryamur@cybage.com';
  que: any = [];
  selected: boolean = false;
  correctans: boolean = false;
  checkAns: boolean = false;
  questionobj: any;
  desc: any;
  maxScorer: any;
  score: number = 0;
  updateinterval: any;

  constructor(
    public service: McqService,
    private myserv: AddtoFavService,
    private serv: Addfav,
    private router: Router
  ) {
    //Status service
    this.service.getStatusList(this.uid, this.qid).subscribe((res: any) => {
      this.mydata = res;
      console.log(this.mydata, 'This is status');
      for (let i = 0; i < this.mydata.length; i++) {
        console.log(this.remainingTime);
        if (this.mydata[i].userans == this.mydata[i].userqu.answer) {
          this.score += 1;
          console.log('myscore', this.score);
        } else {
          this.score = this.score;
        }
      }
    });

    //favourite
    this.myserv.getFavList(this.uid, this.qid).subscribe((res: any) => {
      this.favData = res;
      console.log('data', this.favData);
      this.selected = this.serv.getList(this.favData);
    });
    //High score
    this.service.getScore(this.qid).subscribe(
      (data: any) => {
        this.maxScorer = data.maxscore;
        this.userName = data.usersc.username;
        console.log('high score', data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {}
  fav = {
    quizid: this.qid,
    userid: this.uid,
    status: true,
  };
  toggleSelected(): void {
    this.selected = this.serv.favToggel(this.fav);
  }
  //set quize timer
  setTimer() {
    this.countDown = timer(0, this.tick).subscribe(() => {
      --this.counter;
     
      this.updateinterval = setInterval(() => {
        let co = {
          remainingtime: this.counter,
          quizeId: this.qid,
          userId: this.uid,
        };
        this.service.updatetimer(co).subscribe((res: any) => {});
      }, 30000);
      
      if (this.counter == 0) {
        alert(this.counter);
        this.submitQuiz();
      }
    });
  }

  //show quiz list
  quizlist() {
    if (this.mydata.length == 0) {
      this.service.getTimer(this.qid).subscribe((res: any) => {
        this.counter = res.time;
        this.setTimer();
      });
    } else {
      this.counter = this.mydata[this.mydata.length - 1].remainingtime;
      this.setTimer();
    }

    this.service.getallquestions(this.qid).subscribe((res: any) => {
      this.que = res;
      console.log(this.que);

      console.log(this.mydata + 'sssss');

      for (let i: any = 0; i < this.que.length; i++) {
        // this.ques[i] = { ...this.que[i], disable: false };
        this.ques[i] = {
          ...this.que[i],
          disable: false,
          userSelected: false,
          selectedOption: null,
          wrong1: false,
          wrong2: false,
          wrong3: false,
          wrong4: false,
        };

        console.log(this.que[i]);
        if (this.mydata.length != 0) {
          for (let j: any = 0; j < this.mydata.length; j++) {
            if (this.que[i].id == this.mydata[j].questionId) {
              this.ques[i] = {
                ...this.que[i],
                status: true,
                userAns: this.mydata[j].userans,
              };

              console.log('if ', this.ques[i], i, j);
              break;
            } else {
              this.ques[i] = { ...this.que[i], status: false };
              console.log('else in', this.ques[i], i, j);
            }
          }
        } else {
          console.log('inside timer else ');

          this.ques[i] = { ...this.que[i], status: false };
          console.log('else in 2', this.ques[i]);
        }
      }
      console.log(this.que);

      console.log(this.ques, 'All Questions');
    });
  }

  setAnswer(
    option: string,
    questionid: number,
    ans: string,
    question: any,
    i: any
  ) {
    // this.ques[i] = { ...this.que[i], disable: true };
    this.ques[i] = {
      ...this.que[i],
      disable: true,
      userSelected: true,
      selectedOption: option,
      wrong1: false,
      wrong2: false,
      wrong3: false,
      wrong4: false,
    };
    let options = [
      question.option1,
      question.option2,
      question.option3,
      question.option4,
    ];
    let index = options.indexOf(option);
    console.log(index);
    if (index == 0 && option != ans) {
      this.ques[i] = {
        ...this.que[i],
        disable: true,
        userSelected: true,
        selectedOption: option,
        wrong1: true,
        wrong2: false,
        wrong3: false,
        wrong4: false,
      };
    } else if (index == 1 && option != ans) {
      this.ques[i] = {
        ...this.que[i],
        disable: true,
        userSelected: true,
        selectedOption: option,
        wrong1: false,
        wrong2: true,
        wrong3: false,
        wrong4: false,
      };
    } else if (index == 2 && option != ans) {
      this.ques[i] = {
        ...this.que[i],
        disable: true,
        userSelected: true,
        selectedOption: option,
        wrong1: false,
        wrong2: false,
        wrong3: true,
        wrong4: false,
      };
    } else if (index == 3 && option != ans) {
      this.ques[i] = {
        ...this.que[i],
        disable: true,
        userSelected: true,
        selectedOption: option,
        wrong1: false,
        wrong2: false,
        wrong3: false,
        wrong4: true,
      };
    }

    option == ans ? (this.score += 1) : this.score;

    let status = {
      quizeId: this.qid,
      userId: this.uid,
      userans: option,
      questatus: true,
      questionId: questionid,
      remainingtime: this.counter,
    };

    this.service.insertstatus(status).subscribe((res: any) => {
      console.log(res);
    });
  }

  //descriptive question
  onblurdesc(questionid: number, questionanswer: string, event: any, i: any) {
    // this.ques[i] = { ...this.que[i], disable: true };
    this.ques[i]={...this.que[i],disable:true,answerByUser:event.target.value}
    let value = event.target.value;
    console.log(value + 'value by text');

    let status = {
      quizeId: this.qid,
      userId: this.uid,
      userans: value,
      questatus: true,
      questionId: questionid,
      remainingtime: this.counter,
    };
    questionanswer == value ? (this.score += 1) : this.score;
    this.service.insertstatus(status).subscribe((res: any) => {
      console.log(res);
    });
  }

  //submit quiz and timer off
  submitQuiz() {
    this.countDown.unsubscribe();
    clearInterval(this.updateinterval);

    console.log(this.score);
    let scoreData = {
      email: this.userMail,
      score: this.score,
    };
    let score = {
      score: this.score,
      quizeId: this.qid,
      userId: this.uid,
    };
    this.service.saveScore(score).subscribe((res: any) => {
      console.log(res);
    });

    this.service.clearstatus(this.qid, this.uid).subscribe((res: any) => {
      console.log(res);
    });
    this.service.sendmail(scoreData).subscribe((res: any) => {
      console.log(res);
    });
    this.router.navigate(['/fav']);
  }
}
@Pipe({
  name: 'formatTime',
})
export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours: number = Math.floor(value / 3600);
    const minutes: number = Math.floor((value % 3600) / 60);
    return (
      ('00' + hours).slice(-2) +
      ':' +
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}
