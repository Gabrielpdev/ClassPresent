// import User from "../../entities/User";
// import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';
import authConfig from '../../config/authConfig';

import { IUserRepository } from "../../repositories/IUsersRepository";
import { IHashProvider } from "../../providers/HashProvider/IHashProvider";
import { ICreateSessionRequestDTO } from './CreateSessionDTO';

export default class CreteUserUseCase {
  constructor (
    private usersRepository : IUserRepository,
    private hashProvider : IHashProvider
  ) {}

  async execute(data: ICreateSessionRequestDTO) {
    switch (data.choice){
      case "registration": {
        const user = await this.usersRepository.findByRegistration(data.registration);

        if(!user){
          throw new Error ("This registration does not exists")
        }

        console.log(await this.hashProvider.compare(user.password, data.password))

        if (!await this.hashProvider.compare(data.password, user.password)){
          throw new Error ("Password does not match")
        }

        const token = sign({ userId: user.id }, authConfig.jwt.secret, {
          expiresIn: authConfig.jwt.expiresIn,
        });

        return { user , token }
      }

      case "cpf": {
        const user = await this.usersRepository.findByCpf(data.cpf);

        if(!user){
          throw new Error ("This cpf does not exists")
        }

        if (!await this.hashProvider.compare(user.password, data.password)){
          throw new Error ("Password does not match")
        }

        const token = sign({ userId: user.id }, authConfig.jwt.secret, {
          expiresIn: authConfig.jwt.expiresIn,
        });

        return { user , token }
      }

      case "cellphone": {
        const user = await this.usersRepository.findByCellphone(data.cellphone);
    
        if(!user){
          throw new Error ("This cellphone does not exists")
        }

        if (!await this.hashProvider.compare(user.password, data.password)){
          throw new Error ("Password does not match")
        }

        const token = sign({ userId: user.id }, authConfig.jwt.secret, {
          expiresIn: authConfig.jwt.expiresIn,
        });

        return { user , token }
      }

      default : {
        throw new Error ("Option not chosen")
      }
    }
  }
}