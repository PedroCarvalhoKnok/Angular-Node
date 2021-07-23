import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Contact } from "../model/contactmodel";

@Injectable()


export class ApiService{

    constructor(private http:HttpClient){

       

    }

    baseUrl = 'http://localhost:3000/contact/'

    get(){

        return this.http.get<Contact[]>(this.baseUrl).toPromise()
            
    }

    getById(id: number){

        return this.http.get<Contact>(this.baseUrl + id).toPromise()
            
    }

    post(contact: Contact){

        return this.http.post<Contact>(this.baseUrl, contact).toPromise()
            
    }

    delete(id: number){
            
        return this.http.delete<void>(this.baseUrl + id).toPromise()
    }

    put(contact: Contact){

        return this.http.put<Contact>(this.baseUrl, contact).toPromise()
            
    }

}