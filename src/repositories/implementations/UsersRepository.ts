
import { getRepository, Repository } from 'typeorm';

import { IUserRepository } from '../IUsersRepository';
import { ICreateUserRequestDTO } from '../../useCases/CreateUser/CreateUserDTO';

import User from '../../entities/User';
import { uuid } from 'uuidv4';

class UsersRepository implements IUserRepository {
  private ormRepository: Repository<User>;
  
  constructor() {
  }
  
  public async findByRegistration(registration:string) : Promise<User | undefined> {
    this.ormRepository = getRepository(User);

    const user = this.ormRepository.findOne({
      where: { registration }
    })

    return user;
  }

  public async findByCellphone(cellphone:string) : Promise<User | undefined> {
    this.ormRepository = getRepository(User);

    const user = this.ormRepository.findOne({
      where: { cellphone }
    })

    return user;
  }

  public async findByCpf(cpf:string) : Promise<User | undefined> {
    this.ormRepository = getRepository(User);

    const user = this.ormRepository.findOne({
      where: { cpf }
    })

    return user;
  }

  public async create(userData: ICreateUserRequestDTO): Promise<User> {
    this.ormRepository = getRepository(User);

    const user = this.ormRepository.create({
      id: uuid(),
      ...userData,
    });

    await this.ormRepository.save(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    this.ormRepository = getRepository(User);

    return this.ormRepository.save(user);
  }
}

export default UsersRepository;