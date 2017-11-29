import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testing';
  // myname:String = "brandon";
  contactMethods =[
    {id:1, name: 'Email'},
    {id:2, name: 'cell'}
  ]
  log(input){
    console.log(input);
  }
  submit(inp)
  {
    console.log(inp);
  }
}
