import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
declare var UIkit: any;

@Component({
  selector: 'app-new-batch',
  templateUrl: './new-batch.component.html',
  styleUrls: ['./new-batch.component.scss']
})
export class NewBatchComponent implements OnInit {

  constructor(private dataService: DataService) {}
  scduleLine = {
    cName: '',
    day: 'Weekend',
    date: '',
    time:''
  }
  allScdule = []
  editLine = false;
  ngOnInit() {
    this.dataService.getDocById('new-batch').subscribe(data => {
      this.allScdule = data;
      console.log(this.allScdule);
    });
  }
  saveLine() {
    console.log(this.scduleLine);
    this.dataService.addCollection(this.scduleLine, 'new-batch');
  }
  deleteSc(id) {
    UIkit.modal.confirm('do you want to delete?').then( () => {
      this.dataService.deleteDoc(id,'new-batch');
      
    }, function () {
      console.log('Rejected.')
    });
  }

}
