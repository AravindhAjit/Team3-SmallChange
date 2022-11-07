import { ClientIdentification } from "./clientIdentification";

export class Client{
    
    constructor(
        public clientId: number,
        public email: string,
        public dateOfBirth: Date,
        public country: string,
        public name: string,
        public familyname: string,
        public funds:number,
        public identification: ClientIdentification
    ){}
}

    
