import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, eliminarTarea }) => (
  <div className="cita">
    <p>
      Tarea: <span>{cita.tarea}</span>{" "}
    </p>

    <p>
      Fecha: <span>{cita.fecha}</span>{" "}
    </p>
    <p>
      Hora: <span>{cita.hora}</span>{" "}
    </p>
    <p>
      Descripción: <span>{cita.descripcion}</span>{" "}
    </p>

    <button
      className="button eliminar u-full-width"
      onClick={() => eliminarTarea(cita.id)}
    >
      Eliminar &times;
    </button>
  </div>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired,
};

export default Cita;
