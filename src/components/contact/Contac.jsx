import React from "react";
import "./Contact.css";
const Contac = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="title-contact-form">
          <h1>¿Te ayudamos?</h1>
          <br />
          <p>Queremos saber que podemos hacer por ti y ayudarte a crecer</p>
          <br />
        </div>
        <div className="form">
          <form
            action="mailto:metrica.agenciamkt@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input
              name="nombre"
              className="input"
              placeholder="Tu nombre"
              type={"text"}
            />
            <input
              className="input"
              name="email"
              placeholder="Tu email"
              type={"email"}
            />
            <input
              className="input"
              name="numero"
              placeholder="Tu numero"
              type={"number"}
            />
            <input
              className="input"
              name="web"
              placeholder="Tu Web"
              type={"url"}
            />
            <span>
              Si su pais no se encuentra en la lista, oprima Ingresar pais
            </span>
            <textarea
              name="text"
              placeholder="Cuéntanos como te podemos ayudar"
            />
            <div className="div-button">
              <button
                className="button-form-contact"
                type="submit"
                value={"submit"}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contac;
