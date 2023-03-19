// 10 - Estamos importando a Classe App já instanciada em app.ts
import app from "./app";

// 11 - Criamos uma função main() que irá ser executar os métodos de 'app' e iniciar a nossa aplicação. Essa função é a primeria a ser executada, pois está configurada no arquivo 'package.json' 
function main() {
    try {
        // 12 - estamos utilizando o método listen de express() para criar um servidor passando como parâmetro a porta 3000 em localhost , e uma função assincrona anönima, que irá printar uma mensagem ao ser executada
        app.listen(3000, 'localhost', async () => {
            console.log('starting server in port 3000')
        })
    } catch (err) {
        // Estamos capturando qualquer erro que possa acontecer e printando-o no console
        console.error('Starting server Error', err)
    }
}

// 14 - Estamos executando a função main()
main()