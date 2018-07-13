import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  type: string[] = [
    'HatchBack', 'Sedan', 'MPV', 'SUV', 'CrossOver', 'Coupe'
  ];
  colour: string[] = [
    'Red', 'Black', 'Blue', 'StarDust', 'Grey', 'White'
  ];

  seats: string[] = ['one', 'two', 'four', 'six'];

  nForm:FormGroup;
  name:String;
  typee:string;
  color:string;
  seat:String;
  vno:any;
 
constructor(private fb : FormBuilder)
{
 this.nForm = fb.group(
     {
       'name' : [null],
       'typee' : [null],
       'color' : [null],
       'seat' : [null],
       'vno' : [null,Validators.required],

       'validate': ''
     }
 )
}

 data(valuess)
 {
   
   this.name=valuess.name;
   this.typee=valuess.typee;
   this.color=valuess.color;
   this.vno=valuess.vno;
   this.seat=valuess.seat;
   console.log(this.name);
   console.log(this.typee); 
   console.log(this.color);
   console.log(this.vno); 
   console.log(this.seat);  
 }

}

