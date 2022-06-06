import { Quote } from "../../model/Quote"
import { IQuotesRepository } from "../../repositories/IQuotesRepository"

class ListQuotesUseCase {
    constructor(private quotesRepositories: IQuotesRepository) { }

    execute(): Quote[] {
        const quotes = 
    }
}

export { ListQuotesUseCase }