import { Component } from '@angular/core';

import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { ApiService } from '../app/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  questionid: number = 1;
  categoryid: number = 1;

  shownext=true;
  showprev=true;
  showsubmit=true;
  answer:any;
  correct_answer:any;
  apidata: any=[];
  answerdata: any=[];
  allquestiondata: any=[];
  lastquestion: any=[];
  allcategories: any=[];

  constructor(public apiService: ApiService, private activatedRoute: ActivatedRoute, private router: Router) { 
    
  }
  gotoquestion(){
    this.router.navigate(['questions']);
  }
}
