import { Request, Response } from "express";
import { createConnection, getConnection, Repository } from 'typeorm'
import { Contact } from "./contactModel";
import { ContactSchema } from "./contactdefinition";
import { exception } from "console";

export class ContactController {
    contactRepository: Repository<Contact> = null

    constructor() { 
        createConnection().then(() => {
            this.contactRepository = getConnection().getRepository(ContactSchema)
            console.log('Connected to Database');
        })
    }

    async getContacts(req: Request, res: Response) {
        try{
        let contacts = await this.contactRepository.find()
        res.send(contacts)
        }
        catch(error){
           res.status(400).send(error)
        };
        
    }

    async getContact(req: Request, res: Response) {
        let contact = await this.contactRepository.findOne(req.params.id)
    }

    async createContact(req: Request, res: Response) {
        let contact: Contact = req.body

        if(!contact) {
            res.status(400).send('O contato não foi enviado')
        }

        let newContact = this.contactRepository.create(contact)
        await this.contactRepository.save(newContact)

        res.send(newContact)
    }

    async updateContact(req: Request, res: Response) {
        let contact = await this.contactRepository.findOne(req.params.id)
        contact = this.contactRepository.merge(contact,req.body)
        await this.contactRepository.save(contact);
    }

    async deleteContact(req: Request, res: Response) {
        let contact = await this.contactRepository.findOne(req.params.id)
        let context = await this.contactRepository.remove(contact)
        await this.contactRepository.save(contact);
        
        return {};
    }
}