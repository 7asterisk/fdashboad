import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../data.service';
declare var UIkit: any;

@Component({
  selector: 'app-demo-batch',
  templateUrl: './demo-batch.component.html',
  styleUrls: ['./demo-batch.component.scss']
})
export class DemoBatchComponent implements OnInit {

  constructor(private dataService: DataService) {}
  scduleLine = {
    cName: '',
    location: '',
    time:'',
    day: '',
    date: ''
  }
  allScdule = []
  editLine = false;
  ngOnInit() {
    this.dataService.getDocById('demo-batch').subscribe(data => {
      this.allScdule = data;
      console.log(this.allScdule);
    });
  }
  saveLine() {
    console.log(this.scduleLine);
    this.dataService.addCollection(this.scduleLine, 'demo-batch');
  }
  deleteSc(id) {
    UIkit.modal.confirm('do you want to delete?').then( () => {
      this.dataService.deleteDoc(id,'demo-batch');
      
    }, function () {
      console.log('Rejected.')
    });
  }
}