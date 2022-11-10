import { Order } from "./order";

export class Trade{

    constructor(
        public instrumentId: string,
        public quantity: number,
        public executionPrice: number,
        public direction: string,
        public cashValue: number,
        public portfolioId:number,
        public clientId: number,
        public tradeId: string,
        public categoryid: String,
        public instrumentdescription:string

    ){

    }

    
}


