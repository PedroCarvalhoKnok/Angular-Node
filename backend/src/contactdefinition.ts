import { EntitySchema } from "typeorm";
import { Contact } from "./contactModel";

export const ContactSchema = new EntitySchema<Contact>({
    name: "contact",
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true
        },
        name: {
            type: String,
        },
        phone: {
            type: String,
        }
    }
})