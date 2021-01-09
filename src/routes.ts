import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { createSessionController } from "./useCases/CreateSession";
// import ensureAuthenticated from './middlewares/ensureAuthentication'; 

const router = Router();


router.post('/session', (req, res) => {
  return createSessionController.handle(req, res);
})

// router.use(ensureAuthenticated);

router.post('/users', (req, res) => {
  return createUserController.handle(req, res);
})

export { router };