export class Preference{
    constructor(
        public investmentPurpose:string,
        public riskTolerance:string|undefined,
        public incomeCategory:string,
        public investmentLength:string,
        public preferenceSet:boolean,
        public clientId:number
    ){}
}