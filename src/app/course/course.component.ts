import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { ActivatedRoute, Router } from "@angular/router";
declare var UIkit: any;

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.scss"]
})
export class CourseComponent implements OnInit {
  editorConfig = {
    editable: true,
    spellcheck: true,
    height: "auto",
    minHeight: "500",
    width: "auto",
    minWidth: "0",
    translate: "yes",
    enableToolbar: true,
    showToolbar: true,
    placeholder: "Enter text here...",
    imageEndPoint: "",
    toolbar: [
      ["bold", "italic", "underline", "strikeThrough"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
      ["orderedList", "unorderedList"],
      ["link", "image"]
    ]
  };

  course = {
    certification: "",
    curriculum: "",
    desc: "",
    imgUrl: "",
    name: "",
    trainerProfile: "",
    whatIsNext: "",
    whyRadical: "",
    cModule: []
  };

  editName = false;
  editImgUrl = false;
  courseId = 0;
  courses = [];
  moduleTite = "";
  menu = 1;
  oldname = "";
  constructor(
    private dataService: DataService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activateRouter.paramMap.subscribe(param => {
      this.courseId = parseInt(param.get("id"));
      this.dataService.getDocById("courses").subscribe(data => {
        this.courses = data;
        this.course = data[this.courseId];
        this.oldname = this.course.name;
        if (this.courseId == -1) {
          this.addNewCourse();
        } else {
          this.editName = false;
          this.editImgUrl = false;
        }
      });
    });
  }

  addModule() {
    if (this.course.cModule) {
      this.course.cModule.push({
        moduleTite: this.moduleTite,
        moduleContent: ""
      });
    } else {
      this.course.cModule = [
        { moduleTite: this.moduleTite, moduleContent: "" }
      ];
    }
    this.moduleTite = "";
  }

  addNewCourse() {
    this.editName = true;
    this.editImgUrl = true;
    this.course = {
      certification: "",
      curriculum: "",
      desc: "",
      imgUrl: "",
      name: "",
      trainerProfile: "",
      whatIsNext: "",
      whyRadical: "",
      cModule: []
    };
  }

  updateCourse() {
    if (this.courseId != -1) {
      if (this.oldname != this.course.name) {
        this.dataService.addItem(this.course, this.course.name, "courses");
        this.dataService.deleteDoc("courses", this.oldname);
      }
    } else {
      this.dataService.addItem(this.course, this.course.name, "courses");
    }
  }

  deleteCourse(course) {
    UIkit.modal.confirm("do you want to delete?").then(
      () => {
        this.dataService.deleteDoc("courses", course.id);
        this.router.navigate(["/course", { id: 0 }]);
      },
      function() {
        console.log("Rejected.");
      }
    );
  }

  ngOnInit() {}
}
