import { Order } from "./order";

export interface Trade{
    instrumentId: string;
    quantity: number;
    executionPrice: number;
    direction: string;
    clientId: string;
    order: Order;
    tradeId: string;
    cashValue: number;

    constructor():{
        
    }
}