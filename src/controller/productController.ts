import productService from "../service/productService";
import {Request, Response} from 'express';


class ProductController {

    async create(req: Request, res: Response) {
        console.log(req.body)

        await productService.createProductList(req.body);

        return res.status(201).send(); // Status para dizer que foi um sucesso e que criamos algo na Req;
    }

    async list(req: Request, res: Response) {
        const productList = await productService.listProducts();

        return res.status(200).send(productList);
    }

    async stock(req: Request, res: Response) {
        const product = await productService.getStock();

        return res.status(200).send(product);
    }

}

export default new ProductController();