import { Router } from 'express';
import authMiddleware from './middleware/authMiddleware';
import AuthController from './controller/AuthController';
const router = Router();

router.route('/api/user/authenticate')
  .get(authMiddleware, AuthController.authenticate);

export { router };