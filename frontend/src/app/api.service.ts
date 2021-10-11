import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Router, NavigationEnd, ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://localhost/quiz/backend/";
  constructor(private httpClient : HttpClient,private router: Router) {
    var queryString = window.location.search;
    console.log(queryString);
   }

  QuestionData(questionid: number,categoryid: number){
    const promise = new Promise((resolve, reject) => {
      this.httpClient
        .get(`${this.PHP_API_SERVER}getquestion.php?categoryid=`+categoryid+`&questionid=`+questionid)
        .toPromise()
        .then((res: any) => {
          resolve(res);
        },
        err => {
            console.log(err);            
          }
        );
    });
    return promise;
  }

  saveData(sendData:any){
    console.log(sendData);
    const promise = new Promise((resolve, reject) => {
			this.httpClient
			  .post(`${this.PHP_API_SERVER}savedata.php/`,sendData)
			  .toPromise()
			  .then((res: any) => {
				  resolve(res);
			  },
				err => {
				  console.log(err);
				}
			  );
		  });
	  return promise;
  }
}
