import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { of } from 'rxjs/Observable/of';

export interface Question {
    id: number;
    question: string;
    type: string;
    starValue?: number; // answer of the question in case of type==='STAR'
    textValue: string; // answer of the question in case of type==='TEXT'
}

@Injectable()
export class SurveyService {

    private questions: Array<Question>;

    constructor(private http: CustomHttpService) { }

    fetchQuestions() {
        if (this.questions) {
            return of(this.questions);
        } else {
            return this.http.get('/survey/question').map(res => {
                this.questions = res;
                return res;
            });
        }
    }

   submitSurvey(payLoad:any){
       return this.http.post('/survey',payLoad);
   }
}