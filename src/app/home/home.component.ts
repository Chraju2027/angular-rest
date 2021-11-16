import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  data: any[ ]=[ ]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://cat-fact.herokuapp.com/facts").subscribe(
      res=>{
       this.data=res;

      });

  }
  

}



