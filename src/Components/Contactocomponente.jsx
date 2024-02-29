import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaSpinner } from "react-icons/fa";
import MAPA from "./Maps1"
import "./Contactocomponente.css";

export const Contactocomponente = () => {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [emailSent, setEmailSent] = useState(false);
  const [showEmailSentMessage, setShowEmailSentMessage] = useState(false);
  const [inputValue, setInputValue] = useState({
    user_name: "",
    user_email: "",
    asunto: "",
    message: "",
  });
  const [sendingEmail, setSendingEmail] = useState(false);

  const handleBlur = (e) => {
    console.log("Evento blur activado");
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /*const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x4v9z9j",
        "template_n7by7sp",
        form.current,
        "d3VXfZZrFVUqnu77q"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setEmailSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };*/

  const sendEmail = (e) => {
    e.preventDefault();

    const inputs = form.current.querySelectorAll("input, textarea");
    let isFormValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isFormValid = false;
        input.classList.add("campo-incompleto");
      } else {
        input.classList.remove("campo-incompleto");
      }
    });

    if (isFormValid) {
      setSendingEmail(true);
      emailjs
        .sendForm(
          "service_x4v9z9j",
          "template_n7by7sp",
          form.current,
          "d3VXfZZrFVUqnu77q"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            setEmailSent(true);
            form.current.reset();
            setShowEmailSentMessage(true); // Mostrar el mensaje "Email enviado"
            setTimeout(() => {
              setShowEmailSentMessage(false); // Ocultar el mensaje después de 3 segundos
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          }
        )
        .finally(() => {
          setSendingEmail(false);
        });
    } else {
      alert("Por favor completa todos los campos.");
    }
  };

  useEffect(() => {
    const inputs = document.querySelectorAll(
      ".input-field input, .input-field textarea"
    );
    inputs.forEach((input) => {
      if (input.value !== "") {
        input.classList.add("has-value");
      } else {
        input.classList.remove("has-value");
      }
    });
  }, [inputValue]);

  return (
    <div className="contentContacto">
      <div className="contact-wrapper">

        <form ref={form} onSubmit={sendEmail} className="form-contacto">
          <div class="input-field">
            <input
              type="text"
              id="nombre"
              required
              onBlur={handleBlur}
              className="input-contacto"
              name="user_name"
              placeholder="Nombre"
            />
          </div>

          <div class="input-field">
            <input
              type="email"
              id="email"
              required
              onBlur={handleBlur}
              className="input-contacto"
              name="user_email"
              placeholder="Email"
            />
          </div>

          <div class="input-field">
            <input
              type="text"
              id="asunto"
              required
              onBlur={handleBlur}
              className="input-contacto"
              name="asunto"
              placeholder="Asunto"
            />
          </div>

          <div class="input-field">
            <textarea
              id="mensaje"
              required
              onBlur={handleBlur}
              className="input-contacto2"
              name="message"
              placeholder="Mensaje"
            ></textarea>
          </div>

          <p className="block">
            <button
              className="btn-contacto"
              type="submit"
              value="Send"
              disabled={sendingEmail}
            >
              {sendingEmail ? <FaSpinner className="spinner" /> : "ENVIAR"}
            </button>
          </p>
          {showEmailSentMessage && <p className="p-enviado">Email enviado.</p>}
        </form>
        <MAPA></MAPA>
      </div>
    </div>
  );
};
