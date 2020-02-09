import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../data.service';
import {
  ActivatedRoute
} from '@angular/router';
declare var UIkit: any;

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  editorConfig = {
    "editable": true,
    "spellcheck": true,
    "height": "auto",
    "minHeight": "500",
    "width": "auto",
    "minWidth": "0",
    "translate": "yes",
    "enableToolbar": true,
    "showToolbar": true,
    "placeholder": "Enter text here...",
    "imageEndPoint": "",
    "toolbar": [
      ["bold", "italic", "underline", "strikeThrough"],
      ["fontName", "fontSize", "color"],
      ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"],
      ["orderedList", "unorderedList"],
      ["link", "image"]
    ]
  }
  editName = false;
  editImgUrl = false;
  courseId = 0;
  courses= []
  constructor(private dataService: DataService, private activateRouter: ActivatedRoute) {
    this.activateRouter.paramMap.subscribe(param => {
      this.courseId = parseInt( param.get("id"));
      console.log(this.courseId);
      this.dataService.getDocById('courses').subscribe(data => {
        console.log(data);
        this.courses =data
        this.course = data[this.courseId];
        if (this.courseId == -1) {
          this.addNewCourse()
        }else{
          this.editName = false;
          this.editImgUrl = false;
        }
      })
  })
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
      whyRadical: ""
    }
  }

  course = {
    certification: "",
    curriculum: "",
    desc: "",
    imgUrl: "",
    name: "",
    trainerProfile: "",
    whatIsNext: "",
    whyRadical: ""
  }
  ngOnInit() {
   
  }
  updateCourse() {
    this.dataService.addItem(this.course, this.course.name, 'courses')
  }
  deleteCourse(id){
    UIkit.modal.confirm('do you want to delete?').then( () => {
    this.dataService.deleteDoc('courses',id)
    }, function () {
      console.log('Rejected.')
    });

  }
}
