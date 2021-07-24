import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/model/contactmodel';
import { ApiService } from 'src/app/services/api-service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarSuccessComponent } from 'src/app/pages/snackbar/snackbar-success';
import { SnackbarErrorComponent } from 'src/app/pages/snackbar/snackbar-error';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})


export class ListComponent implements OnInit {

  dataSource!: Contact[]

  formGroup!: FormGroup

  displayedColumns: string[] = ['id', 'name', 'phone', 'buttons'];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal, private apiService: ApiService,public dialog: MatDialog,
    private snackBar: MatSnackBar ) { }

  async ngOnInit() {

    this.dataSource = await this.apiService.get()



    // this.dataSource.forEach(() =>{

    // })

  }
 

  add(){

  }

  edit(){

    console.log('edit...');

  }

  async delete(id: number){

    try {
      const dialogRef = this.dialog.open(ConfirmDialog);

      dialogRef.afterClosed().subscribe(async (result) => {
        if (result) {
          await this.apiService.delete(id);
          this.dataSource = await this.apiService.get();
          this.snackBar.openFromComponent(SnackbarSuccessComponent, {
            duration: 5000,
            panelClass: ['snack-content-success'],
          });
        }
      });
    } catch {
      this.snackBar.openFromComponent(SnackbarErrorComponent, {
        duration: 5000,
        panelClass: ['snack-content-error'],
      });
    }
  }

  private setForm(contact: Contact): void {

    this.formGroup = this.formBuilder.group({

      name:[contact.name, [Validators.required]],
      contactNumber:[contact.phone, [Validators.required, Validators.minLength(10), Validators.maxLength(11)]]
    })
  }

   open(content: Contact, contact: Contact): void {

    try {
      this.setForm(contact);

      this.modalService.open(content).result.then(
        async (result) => {
          if (this.formGroup.valid) {
            await this.apiService.put({
              ...this.formGroup.value,
              id: contact.id,
            });
            this.dataSource = await this.apiService.get();
            this.snackBar.openFromComponent(SnackbarSuccessComponent, {
              duration: 5000,
              panelClass: ['snack-content-success'],
            });
          }
        },
        (reason) => {}
      );
    } catch {
      this.snackBar.openFromComponent(SnackbarErrorComponent, {
        duration: 5000,
        panelClass: ['snack-content-error'],
      });
    }
  }

}

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm-dialogue.html',
})
export class ConfirmDialog {}