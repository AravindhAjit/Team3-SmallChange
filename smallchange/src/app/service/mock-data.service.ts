import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';
import { ClientIdentification } from '../models/clientIdentification';
import { Instrument } from '../models/instrument';
import { Order } from '../models/order';
import { Price } from '../models/price';
import { Trade } from '../models/trade';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  orders: Order[] = [
    {instrumentId: "1", quantity: 25,targetPrice: 145, direction: "B", clientId: "101", orderId: "205"},
    {instrumentId: "2", quantity: 25,targetPrice: 145, direction: "S", clientId: "103", orderId: "206"},
    {instrumentId: "3", quantity: 25,targetPrice: 145, direction: "B", clientId: "105", orderId: "223"},
    {instrumentId: "4", quantity: 25,targetPrice: 145, direction: "B", clientId: "107", orderId: "224"},
    {instrumentId: "5", quantity: 25,targetPrice: 145, direction: "S", clientId: "101", orderId: "208"},
    {instrumentId: "6", quantity: 25,targetPrice: 145, direction: "S", clientId: "105", orderId: "209"},
    {instrumentId: "7", quantity: 25,targetPrice: 145, direction: "B", clientId: "161", orderId: "201"},
    {instrumentId: "8", quantity: 25,targetPrice: 145, direction: "B", clientId: "109", orderId: "234"},
    {instrumentId: "9", quantity: 25,targetPrice: 145, direction: "S", clientId: "111", orderId: "267"},
    {instrumentId: "10", quantity: 25,targetPrice: 145, direction: "B", clientId: "105", orderId: "266"},
  ];

  clientIdentifications: ClientIdentification[] = [
      {type: "SSN", value: "EMP123"},
      {type: "SSN", value: "EMP124"},
      {type: "EID", value: "EMP143"},
      {type: "SSN", value: "EMP153"},
      {type: "EID", value: "EMP732"},
      {type: "EID", value: "EMP022"},
      {type: "SSN", value: "EMP026"},
      {type: "SSN", value: "EMP334"},
      {type: "SSN", value: "EMP103"},
      {type: "EID", value: "EMP120"},
  
  ];

  clients: Client[] = [
    {
      clientId: "1", email: "abc@xyz.com",dateOfBirth: "20001203" ,country: "IN",postalCode: "681014", identification: [{ type: "SSN", value: "EMP123" }]
  },
  {
      clientId: "2", email: "xyz@gmail.com",dateOfBirth: "20001203" ,country: "IN",postalCode: "681014", identification: [{ type: "SSN", value: "EMP123" }]
  },
  {
      clientId: "3", email: "abc@gmail.com",dateOfBirth: "20001203" ,country: "US",postalCode: "681014", identification: [{ type: "SSN", value: "EMP654" }]
  },
  {
      clientId: "4", email: "abc@yahoo.com",dateOfBirth: "20001203" ,country: "US",postalCode: "681014", identification: [{ type: "EID", value: "EMP124" }]
  },
  {
      clientId: "5", email: "xyz@yahoo.com",dateOfBirth: "20001203" ,country: "IN",postalCode: "681014", identification: [{ type: "SSN", value: "EMP091" }]
  },
  {
      clientId: "6", email: "abc@reddit.com",dateOfBirth: "20001203" ,country: "IN",postalCode: "681014", identification: [{ type: "SSN", value: "EMP322" }]
  },
  {
      clientId: "7", email: "xyz@reddit.com",dateOfBirth: "20001203" ,country: "US",postalCode: "681014", identification: [{ type: "EID", value: "EMP123" }]
  },
  {
      clientId: "8", email: "abc123@xyz.com",dateOfBirth: "20001203" ,country: "IN",postalCode: "681014", identification: [{ type: "SSN", value: "EMP467" }]
  },
  {
      clientId: "9", email: "bca@gmail.com",dateOfBirth: "20001203" ,country: "US",postalCode: "681014", identification: [{ type: "SSN", value: "EMP709" }]
  },
  {
      clientId: "10", email: "abc@gov.in",dateOfBirth: "20001203" ,country: "IN",postalCode: "681014", identification: [{ type: "EID", value: "EMP113" }]
  },
  ];

  instruments: Instrument[] = [
    {instrumentId: "1", description: "instrumentId 1 ", externalIdType: "ISIN", externalId: "ABC456", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "3", description: "instrumentId 2", externalIdType: "ISIN", externalId: "XYZ456", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "2", description: "instrumentId 3", externalIdType: "CUSIP", externalId: "ABC123", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "4", description: "instrumentId 4", externalIdType: "CUSIP", externalId: "ABC345", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "5", description: "instrumentId 5", externalIdType: "ISIN", externalId: "XYZ125", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "6", description: "instrumentId 6", externalIdType: "ISIN", externalId: "ABC459", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "7", description: "instrumentId 7", externalIdType: "CUSIP", externalId: "XYZ756", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "8", description: "instrumentId 8", externalIdType: "ISIN", externalId: "BCA456", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "9", description: "instrumentId 9", externalIdType: "CUSIP", externalId: "ZXY456", category: "CID101",minQuantity: 24, maxQuantity: 50},
    {instrumentId: "10", description: "instrumentId 10 ", externalIdType: "ISIN", externalId: "ABC056", category: "CID101",minQuantity: 24, maxQuantity: 50},
  ];

  prices: Price[] = [

    {instrumentId: "1", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 1, description: "PRICE 1", externalIdType: "SSN", externalId: "ABC456", categoryId: "CID3",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "2", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 2, description: "PRICE 2", externalIdType: "SSN", externalId: "XYZ456", categoryId: "CID4",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "3", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 3, description: "PRICE 3", externalIdType: "EID", externalId: "ABC123", categoryId: "CID3",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "4", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 4, description: "PRICE 4", externalIdType: "EID", externalId: "XYZ123", categoryId: "CID2",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "5", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 5, description: "PRICE 5", externalIdType: "SSN", externalId: "ABC456", categoryId: "CID01",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "6", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 6, description: "PRICE 6", externalIdType: "SSN", externalId: "ABC789", categoryId: "CID2",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "7", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 7, description: "PRICE 7", externalIdType: "EID", externalId: "XYZ789", categoryId: "CID1",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "8", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 8, description: "PRICE 8", externalIdType: "EID", externalId: "ABC234", categoryId: "CID5",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "9", bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 9, description: "PRICE 9", externalIdType: "SSN", externalId: "DEF567", categoryId: "CID3",minQuantity: 24, maxQuantity: 50},},
    {instrumentId: "10",bidPrice: 25000,askPrice: 14000, timestamp: "20220512T073255.234UTC", instrument: {instrument: 10,description: "PRICE 10", externalIdType: "SSN", externalId: "ABC456", categoryId: "CID6",minQuantity: 24, maxQuantity: 50},},
  ];

  trades: Trade[] = [

    {instrumentId: "123", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "206"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "124", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "S", clientId: "102", orderId: "207"},
    tradeId: "401", cashValue: 1500},
    
    {instrumentId: "125", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "2", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "208"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "126", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "S", clientId: "106", orderId: "209"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "127", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "3", quantity: 25, targetPrice: 145, direction: "S", clientId: "108", orderId: "211"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "128", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "6", quantity: 25, targetPrice: 145, direction: "B", clientId: "102", orderId: "222"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "129" , quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "2", quantity: 25, targetPrice: 145, direction: "B", clientId: "104", orderId: "244"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "130", quantity: 23, executionPrice: 2560, direction: "B", clientId: "101", order: {instrumentId: "8", quantity: 25, targetPrice: 145, direction: "S", clientId: "106", orderId: "219"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "131", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "1", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "205"},
    tradeId: "401", cashValue: 1500},

    {instrumentId: "132", quantity: 23, executionPrice: 2560, direction: "S", clientId: "101", order: {instrumentId: "9", quantity: 25, targetPrice: 145, direction: "B", clientId: "101", orderId: "205"},
    tradeId: "401", cashValue: 1500}
  ];

  constructor(){}

  getClients(): Observable<Client[]> {
    return of(this.clients);
  }
  getClientIdentifications(): Observable<ClientIdentification[]> {
    return of(this.clientIdentifications);
  }
  getInstruments(): Observable<Instrument[]> {
    return of(this.instruments);
  }
  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }
  getPrices(): Observable<Price[]> {
    return of(this.prices);
  }
  getTrades(): Observable<Trade[]> {
    return of(this.trades);
  }

}
