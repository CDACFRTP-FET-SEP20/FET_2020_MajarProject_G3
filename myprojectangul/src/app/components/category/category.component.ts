import { Component, OnInit } from "@angular/core";
import { TutorialService } from "src/app/services/tutorial.service";
import { Category } from "src/app/models/category.model";
import { Tutorial } from "src/app/models/tutorial.model";
import { CategoryService } from "src/app/services/category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  categories?: Category[];
  currentTutorial?: Category;
  currentIndex = -1;
  constructor(private categoryservice: CategoryService) {}

  ngOnInit(): void {
    this.retrieveCategories();
  }
  // setActiveTutorial(category: Category, index: number): void {
  //   this.currentCategory = category;
  //   this.getCategorybyId(this.currentCategory.id);
  // }

  // getCategorybyId(id: any): void {
  //   this.categoryservice.getQuize(id).subscribe(
  //     (data) => {
  //       this.quizes = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // retriveallcategory(): void {
  //   this.categoryservice.getCategoryName().subscribe(
  //     (data) => {
  //       this.categories = data;
  //       console.log(data);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  retrieveCategories(): void {
    this.categoryservice.getAll().subscribe(
      (data) => {
        this.categories = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  refreshList(): void {
    this.retrieveCategories();
    this.currentTutorial = undefined;
    this.currentIndex = -1;
  }

  setActiveTutorial(cat: Category, index: number): void {
    console.log(cat);
    this.currentTutorial = cat;
    this.currentIndex = index;
  }
}
