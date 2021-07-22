import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  inputString: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  print(): void{


    console.log(this.inputString)


  }

}
