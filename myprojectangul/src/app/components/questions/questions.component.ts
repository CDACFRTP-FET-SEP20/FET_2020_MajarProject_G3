import { Component, OnInit, Input } from "@angular/core";
import { Question } from "src/app/models/questions.model";
import { QuestionsService } from "src/app/services/questions.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  que = new Question();
  @Input() quizname: string;
  category: any;
  type: any;
  submitted = false;

  constructor(
    private questionservice: QuestionsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
    this.getTypeName();
    this.quizname=this.route.snapshot.paramMap.get("quizname")
  }

  

  addQuestion() {
    if (typeof this.que.answer == "undefined") {
      console.log("This is if");
      alert("Please select the answer");
      return;
    }
    this.submitted = true;
    console.log(this.que.answer, this.quizname);
    this.que.quizname = this.quizname;
    console.log(this.que, "This is from form");
    this.questionservice.addQuestion(this.que).subscribe((data) => {
      console.log(data);
      // alert(data);
    });
  }

  btnClick() {
    this.router.navigate(["/categories"]);
  }
  

  getTypeName() {
    return this.questionservice.getTypeName().subscribe((que) => {
      this.type = que;
      console.log(this.type);
    });
  }
}
