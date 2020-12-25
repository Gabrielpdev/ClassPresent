import User from "../entities/User";
import { ICreateUserRequestDTO } from "../useCases/CreateUser/CreateUserDTO";

export interface IUserRepository {
  findByRegistration(registration:string) : Promise<User | undefined>,
  findByCpf(cpf:string) : Promise<User | undefined>,
  findByCellphone(cellphone:string) : Promise<User | undefined>,
  create(data: ICreateUserRequestDTO): Promise<User>
  save(user: User): Promise<User>
}