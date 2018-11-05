/* Cada Service va a ser un conjunto de funciones que le pegan a cierto endpoint de la API para obtener datos. 
A ese conjunto de funciones lo ubicamos dentro de src/services con el nombre UserService.js. Por ejemplo, si queremos traer un listado de usuarios, actualizar
 alguno, traer un detalle de algunos otros, probablemente tengamos que hacer una llamada a la API a /users. Bueno, en este caso, esas llamadas van a estar 
 dentro de un objeto dentro de src/services/UserServices.js */

import api from './config/api';

export default {
  getUserSessions: async values => api.get('/users', { values })
};
