// import User from "../../entities/User";
// import { getRepository } from 'typeorm';
import { IUserRepository } from "../../repositories/IUsersRepository";
import { IHashProvider } from "../../providers/HashProvider/IHashProvider";
import { ICreateUserRequestDTO } from './CreateUserDTO';

export default class CreteUserUseCase {
  constructor (
    private usersRepository : IUserRepository,
    private hashProvider : IHashProvider,
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const AlreadyRegister = await this.usersRepository.findByRegistration(data.registration);

    if(AlreadyRegister){
      throw new Error ("This registration is already being used")
    }

    const AlreadyCpf = await this.usersRepository.findByCpf(data.cpf);

    if(AlreadyCpf){
      throw new Error ("This cpf is already being used")
    }
    
    const AlreadyCellphone = await this.usersRepository.findByCellphone(data.cellphone);
    
    if(AlreadyCellphone){
      throw new Error ("This cellphone is already being used")
    }
    
    data.password = await this.hashProvider.generate(data.password);

    const user = await this.usersRepository.create(data);
    return user
  }
}