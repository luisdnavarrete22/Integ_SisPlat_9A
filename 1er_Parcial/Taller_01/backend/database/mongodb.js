const mongoose = require("mongoose");

const dbConnect = (app) => {
  mongoose
    .connect(
        //lik de la base de datos
      `mongodb+srv://admin:12345@hotel.tk6bla6.mongodb.net/Hotel?retryWrites=true&w=majority`
    )
    .then((result) => {
      const PORT = 4000;
      app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto, ${PORT}`);
      });
      console.log("Conectado a la base de datos");
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
