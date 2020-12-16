import { Component, OnInit, Input } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Tutorial } from "src/app/models/tutorial.model";

@Component({
  selector: "app-bt",
  templateUrl: "./bt.component.html",
  styleUrls: ["./bt.component.scss"],
})
export class BtComponent implements OnInit {
  current: any = [];
  // current: Tutorial = {
  //   quizname: "",
  //   time: "",
  //   count: "",
  //   category: "",
  // };

  // @Input categoryId: any;

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getQuizes(this.route.snapshot.params.id);
  }

  quizeRounting(id:any)
  {
console.log(id);
this.router.navigate(['/abc/'+id])
  }
  
  getQuizes(id: string): void {
    console.log("data");
    this.tutorialService.get(id).subscribe(
      (data) => {
        this.current = data;
        console.log(this.current);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
