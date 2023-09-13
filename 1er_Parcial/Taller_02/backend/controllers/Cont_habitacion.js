// Importa el modelo de Habitacion si aún no está importado
const Habitacion = require("../models/habitacion");

// Define la factory function para crear habitaciones con validación
async function createHabitacion(Numero_habitacion, 
  Cantidad_cuartos, 
  Tipo_habitacion, 
  precio_habitacion, 
  Descripcion_habitacion) {
  try {
    // Validación: Verifica que no haya habitaciones con el mismo número
    const habitacionExistente = await Habitacion.findOne({ Numero_habitacion });
    if (habitacionExistente) {
      throw new Error('Ya existe una habitación con este número.');
    }

    // Validación: Verifica que el valor de Cantidad_cuartos no sea 0
    if (Cantidad_cuartos === 0) {
      throw new Error('La cantidad de cuartos no puede ser 0.');
    }

    // Crea la nueva habitación si pasa las validaciones
    const nuevaHabitacion = new Habitacion({
      Numero_habitacion,
      Cantidad_cuartos,
      Tipo_habitacion,
      precio_habitacion,
      Descripcion_habitacion,
    });

    // Guarda la nueva habitación en la base de datos
    await nuevaHabitacion.save();

    console.log('Habitación creada con éxito:', nuevaHabitacion);

    return nuevaHabitacion;
  } catch (error) {
    throw error;
  }
}

// Controlador para crear una habitación
const createHab = async (req, res) => {
  try {
    const { Numero_habitacion, 
      Cantidad_cuartos, 
      Tipo_habitacion, 
      precio_habitacion, 
      Descripcion_habitacion } = req.body;

    // Utiliza la factory function para crear una nueva instancia del modelo "Habitacion"
    const nuevaHabitacion = await createHabitacion(Numero_habitacion, 
      Cantidad_cuartos, 
      Tipo_habitacion, 
      precio_habitacion, 
      Descripcion_habitacion);

    res.status(201).json({ message: 'Habitación creada con éxito.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Controlador para obtener todas las habitaciones
const getHab = async (req, res) => {
  try {
    // Consulta todas las habitaciones en la base de datos
    const habitaciones = await Habitacion.find();

    res.status(200).json({ habitaciones });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createHab, getHab };