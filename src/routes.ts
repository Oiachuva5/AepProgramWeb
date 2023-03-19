// 14 - Estamos importando a classe Router do framework express
import { Router } from 'express';
import healthCheckController from './controller/health-checkController';
import productController from './controller/productController';
import userController from './controller/userController';
import User from './controller/userController';

// 15 - Estamos criando uma constante chamada routes que recebe Router()
const routes = Router();

// 16 - Estamos utilizando o método get através da constante routes e passando como parâmetro o nome da rota 'healthCheckControler' e o que ela deve executar ao ser chamda
routes.get('/health-check', healthCheckController.check);
routes.get('/user', userController.list);
routes.post('/products', productController.create);
routes.get('/products', productController.list);
routes.get('/products-stock', productController.stock);

// 17 - estamos exportando a constante routes
export default routes;