import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  states: string[] = [
    'Maharashtra', 'Goa', 'J&K', 'Himachal Pradesh', 'UttarPradesh', 'Kerla'
  ];
  nForm:FormGroup;
  name:String='cfg';
  sdate:Date;
  edate:Date;
  valuess:any;
constructor(private fb : FormBuilder)
{
 this.nForm = fb.group(
     {
       'sname' : [null],
       'sdate' : [null],
       'edate' : [null],
       'validate': ''
     }
 )
}

 data(valuess)
 {
   
   this.name=valuess.sname;
   this.sdate=valuess.sdate;
   this.edate=valuess.edate;
   console.log(this.name);
   console.log(this.sdate); 
   console.log(this.edate); 
 }

}

