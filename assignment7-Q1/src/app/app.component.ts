import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nForm:FormGroup;
   name:String='cfg';
pwd:any;
valuess:any;
constructor(private fb : FormBuilder)
{
  this.nForm = fb.group(
      {
        'name' : [null],
        'pwd' : [null],
        'validate': ''
      }
  )
}

  data(valuess)
  {
    
    this.name=valuess.name;
    this.pwd=valuess.pwd;
    console.log(this.name);
    console.log(this.pwd); 
  }
  


}

