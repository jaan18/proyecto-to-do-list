import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";
import PropTypes from "prop-types";

const Formulario = ({ crearTarea }) => {
  // Crear State de Citas
  const [cita, actualizarCita] = useState({
    tarea: "",
    fecha: "",
    hora: "",
    descripcion: "",
  });
  const [error, actualizarError] = useState(false);

  // Función que se ejecuta cada que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  // Extraer los valores
  const { tarea, fecha, hora, descripcion } = cita;

  // Cuando el usuario presiona agregar cita
  const submitCita = (e) => {
    e.preventDefault();

    // Validar
    if (
      tarea.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      descripcion.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    // Eliminar el mensaje previo
    actualizarError(false);

    // Asignar un ID
    cita.id = uuid();

    // Crear la cita
    crearTarea(cita);

    // Reiniciar el form
    actualizarCita({
      tarea: "",
      fecha: "",
      hora: "",
      descripcion: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Tarea</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre Tarea</label>
        <input
          type="text"
          name="tarea"
          className="u-full-width"
          placeholder="Nombre Tarea"
          onChange={actualizarState}
          value={tarea}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Descripción</label>
        <textarea
          className="u-full-width"
          name="descripcion"
          onChange={actualizarState}
          value={descripcion}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Tarea
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearTarea: PropTypes.func.isRequired,
};

export default Formulario;
