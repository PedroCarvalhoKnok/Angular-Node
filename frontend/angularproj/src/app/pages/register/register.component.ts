import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/model/contactmodel';
import { ApiService } from 'src/app/services/api-service';
import { SnackbarErrorComponent } from 'src/app/pages/snackbar/snackbar-error';
import { SnackbarSuccessComponent } from 'src/app/pages/snackbar/snackbar-success';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  

  formGroup!: FormGroup
  formSubbimited: Boolean = false

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {

    this.setForm()
    
  }

  async sendContact(){
    try {
      this.formSubbimited = true;

      if (this.formGroup.valid) {
        let contact: Contact = this.formGroup.value as Contact;

        await this.apiService.post(contact);
        this.snackBar.openFromComponent(SnackbarSuccessComponent, {
          duration: 5000,
          panelClass: ['snack-content-success'],
        });
        this.router.navigate(['']);
      }
    } catch {
      this.snackBar.openFromComponent(SnackbarErrorComponent, {
        duration: 5000,
        panelClass: ['snack-content-error'],
      });
    }

  }

  private setForm(): void {

    this.formGroup = this.formBuilder.group({

      name:['', [Validators.required]],
      contactNumber:['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }

}
