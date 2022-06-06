import { uuid } from "uuidv4";

class Quote {

    id?: string;
    symbol: string;
    name: string;
    price: string;
    time_zone: string;
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Quote}