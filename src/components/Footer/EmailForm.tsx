import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';

const EmailForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_bs1a9r5', 'template_r6a6w6c', form.current, {
          publicKey: 'V2hRPCZG9sCtLSaKb',
        })
        .then(
          () => {
            alert('Mensaje enviado correctamente ✅');
            form.current?.reset();
          },
          (error) => {
            console.error('Error al enviar el mensaje ❌', error.text);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="email-form">
      <h2>Contáctame</h2>
      <label htmlFor="user_name">Nombre</label>
      <input type="text" name="user_name" id="user_name" required />

      <label htmlFor="user_email">Email</label>
      <input type="email" name="user_email" id="user_email" required />

      <label htmlFor="message">Mensaje</label>
      <textarea name="message" id="message" rows={5} required />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default EmailForm;