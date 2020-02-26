import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute, Router
} from '@angular/router';
import {
  DataService
} from '../data.service';
declare var UIkit: any;

@Component({
  selector: 'app-job-openings',
  templateUrl: './job-openings.component.html',
  styleUrls: ['./job-openings.component.scss']
})
export class JobOpeningsComponent implements OnInit {


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
  id = 0;
  openings=[]
  constructor(private dataService: DataService, private activateRouter: ActivatedRoute,private router: Router) {
    this.activateRouter.paramMap.subscribe(param => {
      this.id = parseInt(param.get("id"));
      console.log(this.id);
      this.dataService.getDocById('job-openings').subscribe(data => {
        console.log(data);
        this.openings = data;
        this.job = data[this.id];
        if (this.id == -1) {
          this.addNewJob()
        } else {
          this.editName = false;
        }
      })
    })
  }

  addNewJob() {
    this.editName = true;
    this.job = {
      desc: "",
      name: "",
    }
  }

  job = {
    desc: "",
    name: "",
  }
  ngOnInit() {

  }
  updateJob() {
    this.dataService.addItem(this.job, this.job.name, 'job-openings')
  }

  deleteJob(job){
    UIkit.modal.confirm('do you want to delete?').then( () => {
     
    this.dataService.deleteDoc('job-openings',job.id)
      this.id=-1
      this.router.navigate([ '/job-openings',{id:0}]);     
      }, function () {
        console.log('Rejected.')
      });
  
  }

}