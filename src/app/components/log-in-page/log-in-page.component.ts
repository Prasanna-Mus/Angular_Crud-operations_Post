import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {
  public username:string = "";
  public password:string = "";

  constructor(private _router: Router) { }
  navigateToFirst() {
    if(this.username === 'Prasanna' && this.password === "12345"){
      console.log("hiii...")
      this._router.navigate(['PostData']);
    }
    else{
      alert("please enter details");
    }
  }

  ngOnInit(): void {
  }

}
