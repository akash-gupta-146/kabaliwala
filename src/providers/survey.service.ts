import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { of } from 'rxjs/Observable/of';

export interface Question {
    id: number;
    question: string;
    type: String
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

    // submitAppreciation(data: any) {
    //     return this.http.post('/appreciation', data);
    // }
}