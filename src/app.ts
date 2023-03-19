// 1 - Importando express
import express from 'express';
// 23 - Importando routes
import routes from './routes';

import mongoose from 'mongoose';


// 2 - Criando uma classe app, onde as configurações da API ficarão.
class app {
    // 3 - Criando uma propriedade express pública e tipando ela: 'express.Application', não estámos atribuindo valor algum
    public express: express.Application;

    // 4 - Criando um construtor público
    public constructor() {
        // 5 - Atribuindo para a propriedade express uma instância de express, quem utilizar dessa propriedade poderá utilizar os métodos presentes dentro de express()
        this.express = express();

        // 8 - Estamos forçando quem instanciar essa classe, automaticamente executá-la.
        this.middleware();

        // 26 - Estamos forçando quem instanciar essa classe, automaticamente executá-la, e assim as rotas serão criadas ao iniciar a aplicação
        this.routes();

        // this.database();
    }

    // 6 - Criando um método middleware
    private middleware() : void {
        // 7 - Estamos utilizando através da propriedade express, estamos utilizando o método use() para dizer ao express que as requisições e respostas serão no formato '.json'
        this.express.use(express.json());
    }

    // public async database() {
    //     try {
    //         await mongoose.connect('mongodb+srv://08leorossi:@cluster0.3iyrukj.mongodb.net/?retryWrites=true&w=majority')
    //         console.log("Connect success");
    //     } catch(err) {
    //         console.error('Connect failed', err);
    //     }
    // }

    // 24 - Estamos criando um método público chamado routes
    private routes() : void {
        // 25 - Estamos utilizando o méotodo use do express() para informar ao framework que este será o arquivo principal do sistema de roteamento
        this.express.use(routes);
    }
}

// 9  - Estamos exportando a classe 'app' já instanciada e chamando o atributo express. Quem chamá-la poderá usar os métodos pertencentes em express()
export default new app().express;