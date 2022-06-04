import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostegresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider();
const postegresUsersRepository = new PostegresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postegresUsersRepository,
    mailtrapMailProvider,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }