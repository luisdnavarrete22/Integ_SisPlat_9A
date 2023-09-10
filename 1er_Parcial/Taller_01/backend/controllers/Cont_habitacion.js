const Habitacion = require ("../models/habitacion");


// Controlador para crear una habitación
const createHab = async (req, res) => {
    try {
      const { Numero_habitacion, Cantidad_cuartos, Tipo_habitacion, precio_habitacion, Descripcion_habitacion } = req.body;
  
      // Crea una nueva instancia del modelo "Habitacion" con los datos proporcionados
      const nuevaHabitacion = new Habitacion({
        Numero_habitacion,
        Cantidad_cuartos,
        Tipo_habitacion,
        precio_habitacion,
        Descripcion_habitacion,
      });
  
      // Guarda la nueva habitación en la base de datos
      await nuevaHabitacion.save();
  
      res.status(201).json({ message: 'Habitación creada con éxito.' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const getHab = async (req, res) => {
    try {
      // Consulta todas las habitaciones en la base de datos
      const habitaciones = await Habitacion.find();
  
      res.status(200).json({ habitaciones });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {createHab, getHab};