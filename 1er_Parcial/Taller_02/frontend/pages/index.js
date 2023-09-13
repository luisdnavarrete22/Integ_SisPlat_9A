import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Habitaciones = () => {
  const [habitaciones, setHabitaciones] = useState([]);
  const [nuevaHabitacion, setNuevaHabitacion] = useState({
    Numero_habitacion: "",
    Cantidad_cuartos: 0,
    Tipo_habitacion: "",
    precio_habitacion: 0,
    Descripcion_habitacion: "",
  });

  const baseUrl = "http://localhost:4000/app/v1";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaHabitacion({
      ...nuevaHabitacion,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create a new room
      await axios.post(`${baseUrl}/hotel`, nuevaHabitacion);
      
      // Clear the form fields after successful submission
      setNuevaHabitacion({
        Numero_habitacion: "",
        Cantidad_cuartos: 0,
        Tipo_habitacion: "",
        precio_habitacion: 0,
        Descripcion_habitacion: "",
      });

      // Reload the list of rooms
      cargarHabitaciones();
    } catch (error) {
      console.error(error);
    }
  };

  const cargarHabitaciones = async () => {
    try {
      // Fetch the list of rooms from the server
      const response = await axios.get(`${baseUrl}/hotel`);
      setHabitaciones(response.data.habitaciones);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Load the initial list of rooms when the component mounts
    cargarHabitaciones();
  }, []);

  return (
    <div className="container-fluid bg-white p-0">
      <div className="row m-0">
        <div className="col-md-3 border border-primary rounded p-3">
          <h1 className="text-primary">Crear Habitación</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Numero_habitacion" className="form-label">Número de Habitación</label>
              <input
                type="text"
                name="Numero_habitacion"
                value={nuevaHabitacion.Numero_habitacion}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Cantidad_cuartos" className="form-label">Cantidad de Cuartos</label>
              <input
                type="number"
                name="Cantidad_cuartos"
                value={nuevaHabitacion.Cantidad_cuartos}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Tipo_habitacion" className="form-label">Tipo de Habitación</label>
              <input
                type="text"
                name="Tipo_habitacion"
                value={nuevaHabitacion.Tipo_habitacion}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="precio_habitacion" className="form-label">Precio de la Habitación</label>
              <input
                type="number"
                name="precio_habitacion"
                value={nuevaHabitacion.precio_habitacion}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Descripcion_habitacion" className="form-label">Descripción de la Habitación</label>
              <textarea
                name="Descripcion_habitacion"
                value={nuevaHabitacion.Descripcion_habitacion}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Crear Habitación</button>
          </form>
        </div>
        <div className="col-md-9 border border-danger rounded p-3">
          <h1 className="text-danger">Listado de Habitaciones</h1>
          <table className="table">
            <thead>
              <tr>
                <th>Número de Habitación</th>
                <th>Cantidad de Cuartos</th>
                <th>Tipo de Habitación</th>
                <th>Precio de la Habitación</th>
                <th>Descripción de la Habitación</th>
              </tr>
            </thead>
            <tbody>
              {habitaciones.map((habitacion) => (
                <tr key={habitacion._id}>
                  <td>{habitacion.Numero_habitacion}</td>
                  <td>{habitacion.Cantidad_cuartos}</td>
                  <td>{habitacion.Tipo_habitacion}</td>
                  <td>{habitacion.precio_habitacion}</td>
                  <td>{habitacion.Descripcion_habitacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Habitaciones;
