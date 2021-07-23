import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/model/contactmodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  

  formGroup!: FormGroup
  formSubbimited: Boolean = false

  constructor(private formBuilder: FormBuilder ) { }

  ngOnInit(): void {

    this.setForm()
    this.formGroup = this.formBuilder.group({
      name:['',[Validators.nullValidator,Validators.required]],
      phone:['',Validators.nullValidator,Validators.required,Validators.minLength(10),Validators.maxLength(11)]
    });
  }

  sendContact(): void{
    this.formSubbimited = true

    if(this.formGroup.valid){

      let contact: Contact = <Contact>this.formGroup.value

      console.log(this.formGroup.value())
    }
    

  }

  private setForm(): void {

    this.formGroup = this.formBuilder.group({

      name:['', [Validators.required]],
      contactNumber:['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }

}
