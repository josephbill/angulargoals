import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';
import { Quote } from '../quote-class/quote';


@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {

  quote: Quote;

  constructor(private http:HttpClient) {
    this.quote = new Quote("","");
  }

  quoteRequest(){
    //interface method for API response
    interface ApiResponse{
      quote:string;
      author:string;
    }
    //creating a promise object
    let promise = new Promise((resolve,reject)=>{
      //consuming api here , get is the request level : talk about different request levels
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
          // Successful API request
          this.quote.quote = response.quote
          this.quote.author = response.author

          resolve(response)
        },
        error=>{
          this.quote.quote = "Never, never, never give up"
          this.quote.author = "Winston Churchill"

          reject(error)
        })
    })
    return promise
  }
}
