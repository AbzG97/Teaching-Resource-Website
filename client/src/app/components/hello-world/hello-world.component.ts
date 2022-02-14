import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { HelloWorldServiceService } from 'src/app/hello-world-service.service';



// a test component 
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  data: any;

  constructor(private service: HelloWorldServiceService) {

  }

  GetHelloWorldFromApi(){
    console.log("Clicked");
    this.service.GetHelloWord().subscribe(returnedData => {
      this.data = returnedData
      console.log(this.data);
    });

  }

 

  ngOnInit(): void {
   
  }

}


