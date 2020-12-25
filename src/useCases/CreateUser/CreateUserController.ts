import { Request, Response } from 'express';
import createUserUseCase from './CreateUserUseCase';

export default class CreateUserController {
  constructor(
    private createUserUseCase: createUserUseCase,
  ) {}

  async handle(req: Request , res: Response) : Promise<Response> {
    const {name, registration, cellphone, cpf, password } = req.body;

    try{
      const user = await this.createUserUseCase.execute({
        name,
        cellphone,
        cpf,
        password,
        registration
      })

      return res.status(201).json(user)

    }catch(err){
      return res.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}