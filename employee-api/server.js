/**
 * arquivo: server.js
 * descrição: arquivo responsável por toda a configuração e execucação do Back-End ('Employee')
 * data: 31/07/2020
 * author: Glaucia Lemos <@glaucia_lemos86>
 */

const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Aplicação sendo executada na porta:', port);
});

