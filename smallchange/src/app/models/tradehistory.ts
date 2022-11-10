
export class TradeHistory{
    
    constructor(

        public instrumentId:string,
        public   quantity:number,
        public   executionPrice:number,
        public   direction:string,
        public   tradeId:string,
        public   cashValue:number,
        public   clientId:number,
        public  instrumentDescription:string,
        public categoryid:String
    ){}
}




