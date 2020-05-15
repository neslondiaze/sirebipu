require("dotenv").config();

const app = require('./server');
require('./database')


  app.listen(process.env.PORT, () =>
    console.log(`¡Escuchando en el puerto ${process.env.PORT} !`)
  );
