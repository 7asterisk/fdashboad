import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
declare var UIkit: any;

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss']
})
export class CertificationComponent implements OnInit {

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
  id = 0;
  certifications=[]
  constructor(private dataService: DataService, private activateRouter: ActivatedRoute) {
    this.activateRouter.paramMap.subscribe(param => {
      this.id = parseInt( param.get("id"));
      console.log(this.id);
      this.dataService.getDocById('certifications').subscribe(data => {
        console.log(data);
        this.certifications= data;
        this.certification = data[this.id];
        if (this.id == -1) {
          this.addNewCertification()
        }else{
          this.editName = false;
          this.editImgUrl = false;
        }
      })
  })
  }

  addNewCertification() {
    this.editName = true;
    this.editImgUrl = true;
    this.certification = {
      desc: "",
      imgUrl: "",
      name: "",
     }
  }

  certification = {
    desc: "",
    imgUrl: "",
    name: "",
   }
  ngOnInit() {
   
  }
  updateCertification() {
    this.dataService.addItem(this.certification, this.certification.name, 'certifications')
  }
  deletecertification(id){
    UIkit.modal.confirm('do you want to delete?').then( () => {
      this.dataService.deleteDoc('certifications',id)
      this.id=-1
      }, function () {
        console.log('Rejected.')
      });
  
   
  }
}
