import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent implements OnInit {

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
    activatedRoute.params.subscribe(val => {
      console.log('val:',val);
      this.getQuestionData(this.questionid,this.categoryid);
    });
  }

  ngOnInit() {
  }

  getQuestionData(questionid:number,categoryid:number){
    if(questionid==0){
      questionid=1;
    }else if(categoryid==2 && questionid==1){
      questionid=6;
    }else if(categoryid==3 && questionid==1){
      questionid=11;
    }
    console.log('qid:',this.questionid);
    this.apiService.QuestionData(questionid,categoryid).then((apidata:any)=>{
      console.log(apidata);
      this.apidata=apidata['questiondata'];
      this.answerdata=apidata['answerdata'];
      this.allquestiondata=apidata['allquestiondata'];
      this.lastquestion=apidata['lastquestion'];
      this.allcategories=apidata['allcategories'];
      this.answer=this.answerdata.answer;

      if(this.answerdata){
        this.answer==apidata['answerdata']['answer'];
      }
      this.correct_answer=this.apidata.answer;
    });
  }

  checkandchange(evt:any,value:any) {
    var target = evt.target;
    this.answer=target.value;
    console.log(this.answer);
    let status=0;
    if(this.answer==this.correct_answer){
      status=1;
    }
    let sendData={questionid:this.questionid,categoryid:this.categoryid,answer:this.answer,status:status};
    this.apiService.saveData(sendData).then((returndata:any)=>{
      console.log(returndata);
    });
  }

  GetPrev(){
    this.questionid=this.questionid-1;
    this.answer='';
    this.correct_answer='';

    this.getQuestionData(this.questionid,this.categoryid);
  }

  GetNext(){
    console.log('ans:',this.answer);
    if(this.answer!='' && this.answer!=undefined){
      this.questionid=this.questionid+1;
      this.answer='';
      this.correct_answer='';

      this.getQuestionData(this.questionid,this.categoryid);
    }else{
      alert('Please select answer');
    }
  }

  checkFlagRadio(qid:any,cid:any,ans:any){
    // console.log('checkFlagRadio');
    if(this.questionid==qid && this.categoryid==cid && this.answer==ans){
      return true;
    } else{
      return false;
    }
  }

  checkdisabled(id:any){
    // lastquestion && value.id>lastquestion.id
    //console.log('this.lastquestion',this.lastquestion,id,this.lastquestion.id);
    if(this.lastquestion.id != undefined && id>this.lastquestion.id){
      if((this.categoryid==2 && this.questionid==6) || (this.categoryid==3 && this.questionid==1)){
        return false;
      }else{
        return true;
      }
    }else{
      return false;
    }
  }
  
  finish(){
    this.router.navigate(['finish']);
  }

}
