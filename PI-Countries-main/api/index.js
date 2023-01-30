//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getCountries} = require('./src/controllers/CountryController')

conn.sync({ /* alter: true */ force: false }).then(() => {
  getCountries()
    .then(() => {
      server.listen(3001, () => {
        console.log('Server listening at 3001');
      });
    })
    .catch((err) => {
      console.error(err);
    });
});
/* Se utiliza la promesa .then para ejecutar la función getCountries antes de que se escuche el puerto. Si getCountries falla, la promesa .catch capturará el error y lo registrará en la consola. Esto ayuda a asegurarse de que la aplicación no se bloquee en caso de un error y brinde una salida útil para resolver problemas.
 */



