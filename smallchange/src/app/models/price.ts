import { Instrument } from "./instrument";

export interface Price{
    instrumentId: string;
    bidPrice: number;
    askPrice: number;
    timestamp: string;
    instrument: Instrument;

    constructor():{
        
    }
}