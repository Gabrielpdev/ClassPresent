import UsersRepository from '../../repositories/implementations/UsersRepository';
import HashProvider from '../../providers/HashProvider/implementations/HashProvider';

import CreateSessionUseCase from '../../useCases/CreateSession/CreateSessionUseCase';
import CreateSessionController from '../../useCases/CreateSession/CreateSessionController';

const usersRepository = new UsersRepository();
const hashProvider = new HashProvider();

const createSessionUseCase = new CreateSessionUseCase(
  usersRepository,
  hashProvider
)

const createSessionController = new CreateSessionController(
  createSessionUseCase
)

export { createSessionController, createSessionUseCase }