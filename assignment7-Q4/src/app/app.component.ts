import { Component } from '@angular/core';



export interface author {
  aname: string;
  pos: number;
  page: number;
  price: number;
}

const auhtor_data: author[] = [
  {pos: 1, aname: 'R.K. Narayan', page: 10000, price: 5000},
  {pos: 2, aname: 'Rohinton Mistry', page: 444, price: 2000},
  {pos: 3, aname: 'Salman Rushdie', page: 555, price: 3000},
  {pos: 4, aname: 'xyz', page: 654, price: 8000},
  {pos: 5, aname: 'abc', page: 1244, price: 9000},
 
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  displayedColumns: string[] = ['pos', 'aname', 'page', 'price'];
  dataSource = auhtor_data;

}

