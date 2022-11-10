import { ClientIdentification } from "./clientIdentification";

export class Client{
    
    constructor(
        public clientId: number,
        public name: string,
        public familyName: string,
        public email: string,
        public dateOfBirth: Date,
        public country: string,
        public password:string,
        public funds:number,

        // public identification: ClientIdentification
    ){}
}

    

