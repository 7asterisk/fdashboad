import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent implements OnInit {
  courses;
  constructor(private dataService: DataService) {
    this.dataService.getDocById("courses").subscribe(data => {
      this.courses = data;
    });
  }

  ngOnInit() {}
}
