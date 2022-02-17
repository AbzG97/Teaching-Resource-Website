import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})


export class HelloWorldServiceService {

  private apiUrl: string = environment.baseUrl;
  private returnedData: string;

  constructor(private httpClient: HttpClient) {}

  GetHelloWord(): Observable<string> {
    return this.httpClient.get(`${this.apiUrl}/HelloWorld`, {responseType: "text"});
  }
}
