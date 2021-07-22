import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['id', 'name', 'phone', 'buttons'];

  constructor() { }

  ngOnInit(): void {
  }


  add(){

  }

  edit(){

  }

  delete(){

    console.log('etsteeee');
  }

}
