const { createHab, getHab } = require('../controllers/Cont_habitacion');
const Habitacion = require('../models/habitacion');

// Mock para simular el modelo de base de datos
jest.mock('../models/habitacion');

describe('Controlador createHab', () => {
  test('Debería crear una nueva habitación correctamente', async () => {
    // Arrange (Preparar)
    const req = {
      body: {
        Numero_habitacion: '101',
        Cantidad_cuartos: 2,
        Tipo_habitacion: 'Estándar',
        precio_habitacion: 100,
        Descripcion_habitacion: 'Habitación cómoda con vista al jardín',
      },
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Crear una instancia mock del modelo Habitacion
    const habitacionMock = new Habitacion();

    // Actuar
    // Usar jest.spyOn para hacer un mock específico para esta instancia
    const saveSpy = jest.spyOn(habitacionMock, 'save').mockResolvedValueOnce();

    await createHab(req, res);

    // Afirmar (Assert)
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({ message: 'Habitación creada con éxito.' });

    // Verificar que se llamó a save en el modelo mock específico para esta instancia
    expect(saveSpy).toHaveBeenCalled();

    // Restaurar el método save para evitar efectos secundarios en otras pruebas
    saveSpy.mockRestore();
  });
});
