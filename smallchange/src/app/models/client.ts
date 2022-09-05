import { ClientIdentification } from "./clientIdentification";

export interface Client{
    clientId: string;
    email: string;
    dateOfBirth: string;
    country: string;
    postalCode: string;
    identification: ClientIdentification;

    constructor():{
        
    }
}