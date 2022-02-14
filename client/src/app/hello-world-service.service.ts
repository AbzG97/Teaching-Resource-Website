import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HelloWorldServiceService {

  private apiUrl: string;
  private returnedData: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = 'http://localhost:8080/HelloWorld';
  }

  GetHelloWord(): Observable<string> {
    return this.httpClient.get(this.apiUrl, {responseType: "text"});
  }
}
