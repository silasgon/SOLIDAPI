import { response, Router } from 'express';

import { createUserController } from './modules/users/useCases/CreateUser';

const router = Router();

router.post('/users', (request, response) => {
    return createUserController.handle(request, response);
});

export { router }