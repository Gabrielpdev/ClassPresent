import UsersRepository from '../../repositories/implementations/UsersRepository';
import CreateUserUseCase from '../../useCases/CreateUser/CreateUserUseCase';
import CreateUserController from '../../useCases/CreateUser/CreateUserController';
import HashProvider from '../../providers/HashProvider/implementations/HashProvider';

const usersRepository = new UsersRepository();
const hashProvider = new HashProvider();

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  hashProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController, createUserUseCase }