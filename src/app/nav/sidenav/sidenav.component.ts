import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  courses=[]
  certifications=[]
  openings=[]
  constructor(private dataService:DataService) { 
    this.dataService.getCollecion('courses').subscribe(data => this.courses=data)
    this.dataService.getCollecion('certifications').subscribe(data => this.certifications=data)
    this.dataService.getCollecion('job-openings').subscribe(data => this.openings=data)
    
  }

  ngOnInit() {
  }

}
