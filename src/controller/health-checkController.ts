// 18 - Estamos importando os TIPOS Request e Response do express
import { Request, Response } from 'express';

// 19 - Estamos criando a classe healthCheckCrontoller
class HealthCheckController {
    // 20 - Estamos criando um método público e assincorono chamado check, que recebe como parametro (inferido) uma req do tipo Request e uma res do tipo Response
    public async check(req: Request, res: Response) {
        // 21 - Estamos retornando um json escrito 'Hello, World!' para quem chamar essa classe
        return res.json('Hello, World!');
    };
}

// 22 - Estamo exportando a classe já instanciada
export default new HealthCheckController();