import { Quote } from "../model/Quote";

interface IListQuoteDTO {
    symbol: string;
    name: string;
    price: string;
    time_zone: string;
}

interface IQuotesRepository {
    findBySymbol(symbol: string): Quote;
    list(): Quote[];
    save(quote: Quote): Promise<void>;
}

export { IListQuoteDTO, IQuotesRepository }