import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';
import { ClientIdentification } from '../models/clientIdentification';
import { Instrument } from '../models/instrument';
import { Order } from '../models/order';
import { Portfolio } from '../models/portfolio';
import { Price } from '../models/price';
import { Trade } from '../models/trade';
import { NewInstrument } from '../models/NewInstrument';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  newInstruments:NewInstrument[] = 
    [
      {
        "id": 1,
        "tradingname": "Nuveen Real Asset Income and Growth Fund",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.2,
        "traddingPricePercentage": 0.5846,
        "logo": false,
        "maxQuantity":1,
        "minQuantity":10
      },
      {
        "id": 2,
        "tradingname": "Pacific Mercantile Bancorp",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 8.07,
        "traddingPricePercentage": 0.5117,
        "logo": false,
        "maxQuantity":2,
        "minQuantity":20
      },
      {
        "id": 3,
        "tradingname": "DLH Holdings Corp.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.87,
        "traddingPricePercentage": 1.7366,
        "logo": true,
        "maxQuantity":2,
        "minQuantity":20

      },
      {
        "id": 4,
        "tradingname": "Glaukos Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.22,
        "traddingPricePercentage": 1.6112,
        "logo": true,
        "maxQuantity":2,
        "minQuantity":20

      },
      {
        "id": 5,
        "tradingname": "Benitec Biopharma Limited",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 8.5,
        "traddingPricePercentage": 1.1311,
        "logo": false,
        "maxQuantity":2,
        "minQuantity":20

      },
      {
        "id": 6,
        "tradingname": "Workiva Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 1.15,
        "traddingPricePercentage": 1.2541,
        "logo": true,
        "maxQuantity":2,
        "minQuantity":20

      },
      {
        "id": 7,
        "tradingname": "Aspen Technology, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 7.74,
        "traddingPricePercentage": 0.9542,
        "logo": false,
        "maxQuantity":2,
        "minQuantity":20

      },
      {
        "id": 8,
        "tradingname": "Interlink Electronics, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 4.16,
        "traddingPricePercentage": 0.3622,
        "logo": true,
        "maxQuantity":2,
        "minQuantity":20

      },
      {
        "id": 9,
        "tradingname": "Lindblad Expeditions Holdings Inc. ",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 6.11,
        "traddingPricePercentage": 0.1579,
        "logo": true,
        "maxQuantity":2,
        "minQuantity":20

      },
      /*
      {
        "id": 10,
        "tradingname": "AppFolio, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 2.55,
        "traddingPricePercentage": 1.4553,
        "logo": false
      },
      {
        "id": 11,
        "tradingname": "Asia Tigers Fund, Inc. (The)",
        "tradingsymbol": "NYSE",
        "tradingPrice": 7.83,
        "traddingPricePercentage": 1.4383,
        "logo": false
      },
      {
        "id": 12,
        "tradingname": "Nuveen Missouri Quality Municipal Income Fund",
        "tradingsymbol": "NYSE",
        "tradingPrice": 2.52,
        "traddingPricePercentage": 0.1424,
        "logo": true
      },
      {
        "id": 13,
        "tradingname": "U.S. Auto Parts Network, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 6.31,
        "traddingPricePercentage": 0.7155,
        "logo": false
      },
      {
        "id": 14,
        "tradingname": "HomeTown Bankshares Corporation",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 8.21,
        "traddingPricePercentage": 1.5675,
        "logo": false
      },
      {
        "id": 15,
        "tradingname": "First Trust New Opportunities MLP & Energy Fund",
        "tradingsymbol": "NYSE",
        "tradingPrice": 1.46,
        "traddingPricePercentage": 1.3143,
        "logo": false
      },
      {
        "id": 16,
        "tradingname": "Schneider National, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 8.02,
        "traddingPricePercentage": 1.5268,
        "logo": true
      },
      {
        "id": 17,
        "tradingname": "ENGlobal Corporation",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.53,
        "traddingPricePercentage": 1.5756,
        "logo": true
      },
      {
        "id": 18,
        "tradingname": "Legg Mason US Diversified Core ETF",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 2.56,
        "traddingPricePercentage": 1.8253,
        "logo": true
      },
      {
        "id": 19,
        "tradingname": "WisdomTree Interest Rate Hedged High Yield Bond Fund",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 2.08,
        "traddingPricePercentage": 1.4282,
        "logo": true
      },
      {
        "id": 20,
        "tradingname": "Viad Corp",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.55,
        "traddingPricePercentage": 1.3794,
        "logo": true
      },
      {
        "id": 21,
        "tradingname": "INC Research Holdings, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.53,
        "traddingPricePercentage": 0.2382,
        "logo": false
      },
      {
        "id": 22,
        "tradingname": "Himax Technologies, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 1.43,
        "traddingPricePercentage": 1.253,
        "logo": false
      },
      {
        "id": 23,
        "tradingname": "ARRIS International plc",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 4.25,
        "traddingPricePercentage": 0.7778,
        "logo": false
      },
      {
        "id": 24,
        "tradingname": "Fortune Brands Home & Security, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.21,
        "traddingPricePercentage": 1.496,
        "logo": true
      },
      {
        "id": 25,
        "tradingname": "Gabelli Convertible and Income Securities Fund, Inc. (The)",
        "tradingsymbol": "NYSE",
        "tradingPrice": 4.13,
        "traddingPricePercentage": 0.909,
        "logo": false
      },
      {
        "id": 26,
        "tradingname": "Vantage Energy Acquisition Corp.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 2.78,
        "traddingPricePercentage": 0.4885,
        "logo": false
      },
      {
        "id": 27,
        "tradingname": "Blackrock Core Bond Trust",
        "tradingsymbol": "NYSE",
        "tradingPrice": 8.21,
        "traddingPricePercentage": 1.6465,
        "logo": false
      },
      {
        "id": 28,
        "tradingname": "Toronto Dominion Bank (The)",
        "tradingsymbol": "NYSE",
        "tradingPrice": 1.31,
        "traddingPricePercentage": 0.7692,
        "logo": true
      },
      {
        "id": 29,
        "tradingname": "TRC Companies, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 4.77,
        "traddingPricePercentage": 1.6989,
        "logo": true
      },
      {
        "id": 30,
        "tradingname": "Hawaiian Holdings, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.06,
        "traddingPricePercentage": 1.7664,
        "logo": true
      },
      {
        "id": 31,
        "tradingname": "Continental Building Products, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 6.17,
        "traddingPricePercentage": 1.6839,
        "logo": true
      },
      {
        "id": 32,
        "tradingname": "Asta Funding, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 6.55,
        "traddingPricePercentage": 0.816,
        "logo": false
      },
      {
        "id": 33,
        "tradingname": "Maiden Holdings, Ltd.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 8.56,
        "traddingPricePercentage": 0.5419,
        "logo": false
      },
      {
        "id": 34,
        "tradingname": "Teekay Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 6.82,
        "traddingPricePercentage": 1.0773,
        "logo": false
      },
      {
        "id": 35,
        "tradingname": "Zion Oil & Gas Inc",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.88,
        "traddingPricePercentage": 0.3572,
        "logo": false
      },
      {
        "id": 36,
        "tradingname": "K2M Group Holdings, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 7.96,
        "traddingPricePercentage": 1.1688,
        "logo": false
      },
      {
        "id": 37,
        "tradingname": "STRATS Trust",
        "tradingsymbol": "NYSE",
        "tradingPrice": 2.71,
        "traddingPricePercentage": 0.6414,
        "logo": false
      },
      {
        "id": 38,
        "tradingname": "Unilever PLC",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.02,
        "traddingPricePercentage": 1.2809,
        "logo": true
      },
      {
        "id": 39,
        "tradingname": "Penumbra, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 6.58,
        "traddingPricePercentage": 0.6738,
        "logo": true
      },
      {
        "id": 40,
        "tradingname": "BP Prudhoe Bay Royalty Trust",
        "tradingsymbol": "NYSE",
        "tradingPrice": 2.87,
        "traddingPricePercentage": 1.9347,
        "logo": true
      },
      {
        "id": 41,
        "tradingname": "KMG Chemicals, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 9.78,
        "traddingPricePercentage": 1.6047,
        "logo": false
      },
      {
        "id": 42,
        "tradingname": "Vanguard Short-Term Inflation-Protected Securities Index Fund",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 4.48,
        "traddingPricePercentage": 1.2419,
        "logo": false
      },
      {
        "id": 43,
        "tradingname": "American Railcar Industries, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 2.75,
        "traddingPricePercentage": 1.2408,
        "logo": false
      },
      {
        "id": 44,
        "tradingname": "Allstate Corporation (The)",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.04,
        "traddingPricePercentage": 1.9631,
        "logo": true
      },
      {
        "id": 45,
        "tradingname": "Gladstone Commercial Corporation",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 5.46,
        "traddingPricePercentage": 1.3833,
        "logo": true
      },
      {
        "id": 46,
        "tradingname": "Scana Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 4.1,
        "traddingPricePercentage": 1.1436,
        "logo": false
      },
      {
        "id": 47,
        "tradingname": "Seres Therapeutics, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 6.83,
        "traddingPricePercentage": 0.0323,
        "logo": false
      },
      {
        "id": 48,
        "tradingname": "Callon Petroleum Company",
        "tradingsymbol": "NYSE",
        "tradingPrice": 7.45,
        "traddingPricePercentage": 1.4513,
        "logo": true
      },
      {
        "id": 49,
        "tradingname": "GSI Technology, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 4.19,
        "traddingPricePercentage": 1.3239,
        "logo": false
      },
      {
        "id": 50,
        "tradingname": "Navios Maritime Holdings Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 7.1,
        "traddingPricePercentage": 0.4069,
        "logo": true
      },
      {
        "id": 51,
        "tradingname": "China New Borun Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.05,
        "traddingPricePercentage": 0.3046,
        "logo": true
      },
      {
        "id": 52,
        "tradingname": "Check Point Software Technologies Ltd.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 1.81,
        "traddingPricePercentage": 1.5896,
        "logo": false
      },
      {
        "id": 53,
        "tradingname": "Guidance Software, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.29,
        "traddingPricePercentage": 0.5674,
        "logo": true
      },
      {
        "id": 54,
        "tradingname": "LMP Capital and Income Fund Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 9.38,
        "traddingPricePercentage": 0.9905,
        "logo": false
      },
      {
        "id": 55,
        "tradingname": "China Biologic Products, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.42,
        "traddingPricePercentage": 1.5226,
        "logo": false
      },
      {
        "id": 56,
        "tradingname": "Inspired Entertainment, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.83,
        "traddingPricePercentage": 1.0852,
        "logo": true
      },
      {
        "id": 57,
        "tradingname": "Genesco Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 3.9,
        "traddingPricePercentage": 0.7159,
        "logo": false
      },
      {
        "id": 58,
        "tradingname": "Anworth Mortgage Asset  Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 1.86,
        "traddingPricePercentage": 0.6443,
        "logo": false
      },
      {
        "id": 59,
        "tradingname": "Zogenix, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 5.54,
        "traddingPricePercentage": 0.5773,
        "logo": false
      },
      {
        "id": 60,
        "tradingname": "Tactile Systems Technology, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 8.93,
        "traddingPricePercentage": 0.8448,
        "logo": false
      },
      {
        "id": 61,
        "tradingname": "180 Degree Capital Corp.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 1.31,
        "traddingPricePercentage": 0.8905,
        "logo": true
      },
      {
        "id": 62,
        "tradingname": "Blueknight Energy Partners L.P., L.L.C.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 6.81,
        "traddingPricePercentage": 1.4712,
        "logo": false
      },
      {
        "id": 63,
        "tradingname": "Pacific Premier Bancorp Inc",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.07,
        "traddingPricePercentage": 1.0075,
        "logo": true
      },
      {
        "id": 64,
        "tradingname": "Lindsay Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 8.5,
        "traddingPricePercentage": 1.885,
        "logo": true
      },
      {
        "id": 65,
        "tradingname": "Comcast Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 1.32,
        "traddingPricePercentage": 0.8216,
        "logo": true
      },
      {
        "id": 66,
        "tradingname": "John Hancock Premium Dividend Fund",
        "tradingsymbol": "NYSE",
        "tradingPrice": 4.63,
        "traddingPricePercentage": 1.9641,
        "logo": false
      },
      {
        "id": 67,
        "tradingname": "Lehman ABS Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 4.19,
        "traddingPricePercentage": 1.7741,
        "logo": true
      },
      {
        "id": 68,
        "tradingname": "Mitcham Industries, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.61,
        "traddingPricePercentage": 1.6712,
        "logo": true
      },
      {
        "id": 69,
        "tradingname": "TriMas Corporation",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.29,
        "traddingPricePercentage": 1.2555,
        "logo": false
      },
      {
        "id": 70,
        "tradingname": "Republic Services, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 9.73,
        "traddingPricePercentage": 1.0306,
        "logo": false
      },
      {
        "id": 71,
        "tradingname": "Prudential Financial, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 5.14,
        "traddingPricePercentage": 0.8102,
        "logo": true
      },
      {
        "id": 72,
        "tradingname": "Osisko Gold Royalties Ltd",
        "tradingsymbol": "NYSE",
        "tradingPrice": 8.75,
        "traddingPricePercentage": 1.2657,
        "logo": true
      },
      {
        "id": 73,
        "tradingname": "E.I. du Pont de Nemours and Company",
        "tradingsymbol": "NYSE",
        "tradingPrice": 4.65,
        "traddingPricePercentage": 1.1897,
        "logo": true
      },
      {
        "id": 74,
        "tradingname": "Elmira Savings Bank NY (The)",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 7,
        "traddingPricePercentage": 0.5261,
        "logo": true
      },
      {
        "id": 75,
        "tradingname": "Express Scripts Holding Company",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 4.9,
        "traddingPricePercentage": 0.5628,
        "logo": true
      },
      {
        "id": 76,
        "tradingname": "Mountain Province Diamonds Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 7.78,
        "traddingPricePercentage": 1.5328,
        "logo": false
      },
      {
        "id": 77,
        "tradingname": "Repros Therapeutics Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 5.8,
        "traddingPricePercentage": 1.2977,
        "logo": true
      },
      {
        "id": 78,
        "tradingname": "Western Asset/Claymore U.S Treasury Inflation Prot Secs Fd 2",
        "tradingsymbol": "NYSE",
        "tradingPrice": 8.82,
        "traddingPricePercentage": 1.2208,
        "logo": true
      },
      {
        "id": 79,
        "tradingname": "China Jo-Jo Drugstores, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 8.35,
        "traddingPricePercentage": 0.4717,
        "logo": false
      },
      {
        "id": 80,
        "tradingname": "HomeStreet, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.22,
        "traddingPricePercentage": 0.3962,
        "logo": false
      },
      {
        "id": 81,
        "tradingname": "BRF S.A.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 7.42,
        "traddingPricePercentage": 0.9922,
        "logo": false
      },
      {
        "id": 82,
        "tradingname": "Alpine Global Dynamic Dividend Fund",
        "tradingsymbol": "NYSE",
        "tradingPrice": 7.63,
        "traddingPricePercentage": 0.8164,
        "logo": false
      },
      {
        "id": 83,
        "tradingname": "Triangle Capital Corporation",
        "tradingsymbol": "NYSE",
        "tradingPrice": 3.17,
        "traddingPricePercentage": 0.8863,
        "logo": true
      },
      {
        "id": 84,
        "tradingname": "DDR Corp.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 7.44,
        "traddingPricePercentage": 1.6969,
        "logo": false
      },
      {
        "id": 85,
        "tradingname": "Dominion Energy, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 1.64,
        "traddingPricePercentage": 1.4801,
        "logo": true
      },
      {
        "id": 86,
        "tradingname": "PIMCO New York Municipal Income Fund III",
        "tradingsymbol": "NYSE",
        "tradingPrice": 3.47,
        "traddingPricePercentage": 0.1477,
        "logo": false
      },
      {
        "id": 87,
        "tradingname": "Destination XL Group, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.14,
        "traddingPricePercentage": 1.5971,
        "logo": false
      },
      
      {
        "id": 88,
        "tradingname": "Landcadia Holdings, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 8.27,
        "traddingPricePercentage": 1.1033,
        "logo": false
      },
      {
        "id": 89,
        "tradingname": "Modern Media Acquisition Corp.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 5.4,
        "traddingPricePercentage": 1.5116,
        "logo": false
      },
      {
        "id": 90,
        "tradingname": "Fidelity National Financial, Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 6.77,
        "traddingPricePercentage": 0.7564,
        "logo": true
      },
      {
        "id": 91,
        "tradingname": "Kingtone Wirelessinfo Solution Holding Ltd",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.56,
        "traddingPricePercentage": 1.0949,
        "logo": true
      },
      {
        "id": 92,
        "tradingname": "American River Bankshares",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 3.2,
        "traddingPricePercentage": 0.7034,
        "logo": false
      },
      {
        "id": 93,
        "tradingname": "MTGE Investment Corp.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 5.56,
        "traddingPricePercentage": 0.3645,
        "logo": true
      },
      {
        "id": 94,
        "tradingname": "Innophos Holdings, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 6.45,
        "traddingPricePercentage": 1.6695,
        "logo": true
      },
      {
        "id": 95,
        "tradingname": "Brooks Automation, Inc.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 4.42,
        "traddingPricePercentage": 1.1758,
        "logo": false
      },
      {
        "id": 96,
        "tradingname": "OM Asset Management plc",
        "tradingsymbol": "NYSE",
        "tradingPrice": 3.61,
        "traddingPricePercentage": 1.271,
        "logo": true
      },
      {
        "id": 97,
        "tradingname": "Foamix Pharmaceuticals Ltd.",
        "tradingsymbol": "NASDAQ",
        "tradingPrice": 9.21,
        "traddingPricePercentage": 0.5729,
        "logo": true
      },
      {
        "id": 98,
        "tradingname": "John Hancock Preferred Income Fund",
        "tradingsymbol": "NYSE",
        "tradingPrice": 1.41,
        "traddingPricePercentage": 1.8451,
        "logo": false
      },
      {
        "id": 99,
        "tradingname": "Wayfair Inc.",
        "tradingsymbol": "NYSE",
        "tradingPrice": 3.48,
        "traddingPricePercentage": 0.9427,
        "logo": false
      },
      {
        "id": 100,
        "tradingname": "EnPro Industries",
        "tradingsymbol": "NYSE",
        "tradingPrice": 9.06,
        "traddingPricePercentage": 1.2945,
        "logo": true
      }
      */
     ]
  

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

  // client : Client[] = [
  //   {},
  //   {},
  // ];

  portfolio: Portfolio[]= [
    {
      Stock: [
       {ins_name: 'NASDAQ',quantity: 64, ins_price: 845.17,cash_value : 54090.88},
       {ins_name: 'ABNB',quantity: 64, ins_price: 120,cash_value : 7680 },
       {ins_name: 'ACR',quantity: 75,ins_price: 456.21,cash_value : 34215.75},
       {ins_name: 'NYSE',quantity: 45,ins_price: 231,cash_value : 10395},
       {ins_name: 'AAPL',quantity: 23,ins_price: 761.99,cash_value : 17525.77},
       {ins_name: 'IRS',quantity: 190,ins_price: 750,cash_value : 142500}
       ],
       Govt: [
        {ins_name: 'NASDAQ',quantity: 64,ins_price: 845.17,cash_value : 54090.88},
        {ins_name: 'ABNB',quantity: 64,ins_price: 120,cash_value : 7680},
        {ins_name: 'AAPL',quantity: 23,ins_price: 761.99,cash_value : 17525.77},
        {ins_name: 'IRS',quantity: 190,ins_price: 750,cash_value : 142500}
        ],
        CD: [
          {ins_name: 'NYSE',quantity: 45,ins_price: 231,cash_value : 10395},
          {ins_name: 'AAPL',quantity: 23,ins_price: 761.99,cash_value : 17525.77},
          {ins_name: 'IRS',quantity: 190,ins_price: 750,cash_value : 142500}
          ]
        }
      ]

  constructor(){}

  getNewInstruments():Observable<NewInstrument[]>{
    return of(this.newInstruments);

  }
  
  getClientIdentifications(): Observable<ClientIdentification[]> {
    return of(this.clientIdentifications);
  }

  getOrders(): Observable<Order[]> {
    return of(this.orders);
  }

  getPortfolio(): Observable<Portfolio[]> {
    return of(this.portfolio);
  }

}
