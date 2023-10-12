const { getHab } = require('../controllers/Cont_habitacion');
const Habitacion = require('../models/habitacion');

// Mock para simular el modelo de base de datos
jest.mock('../models/habitacion');

describe('Controlador getHab', () => {
  test('Debería obtener todas las habitaciones correctamente', async () => {

    // Arrange (Preparar)
    // Datos de ejemplo que podrías ajustar según tu caso
    const habitacionesMock = [
      { Numero_habitacion: '101', 
      Cantidad_cuartos: 2, 
      Tipo_habitacion: 'Estándar', 
      precio_habitacion: 100, 
      Descripcion_habitacion: 'Habitación cómoda con vista al jardín' },
      // Agregar más habitaciones de ejemplo si es necesario
    ];
    // Configurar el comportamiento del modelo mock para find
    Habitacion.find = jest.fn().mockResolvedValue(habitacionesMock);

    // Act (Actuar)
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getHab(req, res);
    // Assert (Afirmar)
    // Verificar que se llamó a find en el modelo mock
    expect(Habitacion.find).toHaveBeenCalled();
    // Verificar que res.status fue llamada con el código de estado 200
    expect(res.status).toHaveBeenCalledWith(200);
    // Verificar que res.json fue llamada con el objeto esperado
    expect(res.json).toHaveBeenCalledWith({ habitaciones: habitacionesMock });
  });
});

