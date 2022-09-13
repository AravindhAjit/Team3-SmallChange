export class Portfolio{
    constructor(
            username:string,
            balance: number,
            stock :[
                {
                   symbol : string,
                   quantity : number,
                   value : number
                }
                ],
                bonds :[
                    {
                    symbol : string,
                    quantity : number,
                    value : number
                    }
                 ],
                 mutual_funds :[
                    {symbol : string,
                    quantity : number,
                    value : number
                    }
                 ],
            
    ){}
}