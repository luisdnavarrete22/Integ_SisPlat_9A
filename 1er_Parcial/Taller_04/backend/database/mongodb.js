const mongoose = require("mongoose");

const dbConnect = (app) => {
  mongoose
    .connect(
        //lik de la base de datos
      `mongodb+srv://admin:${process.env.MONGO_DB_PASSWORD}@hotel.tk6bla6.mongodb.net/Hotel?retryWrites=true&w=majority`
    )
    .then((result) => {
      const PORT = 4000;
      app.listen(process.env.PORT||PORT, () => {
        console.log(`Servidor corriendo en el puerto, ${process.env.PORT||PORT}`);
      });
      console.log("Conectado a la base de datos");
    })
    .catch((err) => console.log(err));
};

module.exports = dbConnect;
