import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from 'src/app/model/contactmodel';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  dataSource: Contact[] = [
    {id: 1, name: 'Pedro', phone: '111111777'},
  ];

  formGroup!: FormGroup

  displayedColumns: string[] = ['id', 'name', 'phone', 'buttons'];

  constructor(private formBuilder: FormBuilder, private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name:['',[Validators.nullValidator,Validators.required]],
      phone:['',Validators.nullValidator,Validators.required,Validators.minLength(10),Validators.maxLength(11)]
    })
  }

  open(content: Contact): void{

    this.modalService.open(content)

  }

  add(){

  }

  edit(){

  }

  delete(){

    console.log('etsteeee');
  }

}
