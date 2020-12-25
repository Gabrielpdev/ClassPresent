import { Request, Response } from 'express';
import CreateSessionUseCase from './CreateSessionUseCase';

export default class CreateUserController {
  constructor(
    private createSessionUseCase: CreateSessionUseCase,
  ) {}

  async handle(req: Request , res: Response) : Promise<Response> {
    const {registration, cellphone, cpf, password, choice } = req.body;

    try{
      const session = await this.createSessionUseCase.execute({
        password,
        registration,
        cpf,
        cellphone,
        choice
      })

      return res.status(201).json(session)

    }catch(err){
      return res.status(400).json({
        message: err.message || "Unexpected error."
      })
    }
  }
}