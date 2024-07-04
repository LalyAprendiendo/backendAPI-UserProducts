//(Ruta para acceder a los usuarios: https://dummyjson.com/users
// y la ruta para acceder a los products: https://dummyjson.com/products)

import { Console } from "console";

const URL_USERS = "https://dummyjson.com/users";

fetch(URL_USERS)
  .then((res) => res.json())
  .then(console.log);

/* { status: 'ok', method: 'GET' } */
