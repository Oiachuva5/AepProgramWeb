import { Request, Response } from 'express';

class User {
    public async list(req: Request, res: Response) {
        return res.json('Leonardo Rossi');
    };
}

// 22 - Estamo exportando a classe já instanciada
export default new User();