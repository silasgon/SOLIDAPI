import { Request, Response } from 'express';

import { ListQuotesUseCase } from './ListQuotesUseCase';

class ListQuotesController {

    constructor(private listQuotesUseCase: ListQuotesUseCase){ }

    handle(request: Request, response: Response): Response {
        
        const all = this.listQuotesUseCase.execute();

        return response.json(all);
    }
}

export { ListQuotesController }