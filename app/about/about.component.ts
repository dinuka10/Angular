import { Component, OnInit } from '@angular/core';
export interface Employee{
  id: string;
  name: string;
  email: string;
  password: string;


}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  employees:Employee[]=[
    {id : '1',name: 'Dinuka',email:'dinuka@gmail.com',password: '1234'},
    {id : '2',name: 'Sanath',email:'sanath@gmail.com',password: '1234'},
    {id : '3',name: 'Kamal',email:'kamal@gmail.com',password: '1234'}
  ];

  constructor() { }

  ngOnInit() {
  }

  show(){
    alert('Hello Dinuka');
  }
  show1(){
    alert('Hello Everyone');
    console.log('DSC');
  }
 



}
