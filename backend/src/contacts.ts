import { Router, Request, Response } from 'express'
import { ContactController } from './contactcontroller'
import { Contact } from './contactModel'

export class ContactRouter {

    controller = new ContactController()

    public getRoutes(): Router {

        const router: Router = Router()

        router.get('/', async (req: Request, res: Response) => {
            await this.controller.getContacts(req, res)
        })

        router.get('/', async (req: Request, res: Response) => {
            console.log(req.params.id);
            await this.controller.getContacts(req, res)
        })

        router.post('/', async (req: Request, res: Response) => {
            await this.controller.createContact(req, res);
        })

        router.put('/', (req: Request, res: Response) => {
            this.controller.updateContact(req,res)
        })

        router.delete('/:id', async (req: Request, res: Response) => {
           await this.controller.deleteContact(req,res)
        })

        return router
    }
}