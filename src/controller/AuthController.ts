import { Request, Response } from 'express';

class AuthController {
  authenticate(req: Request, res: Response) {
    return res.send({ userId: req.userId });
  }
}

export default new AuthController();
