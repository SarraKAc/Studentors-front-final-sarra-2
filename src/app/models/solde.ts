export class Solde {
    constructor(
        public derniereDateRecharge?: string, 
        public montantRecharge?: number,
        public derniereDatePrelevement?: string,
        public montantPrelevement?: number,
        public nbTokens?: number,
    ){}
}
