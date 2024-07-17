import React, { useState } from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false); // Estado para controlar se o formulário foi submetido

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para o backend ou fazer outra ação desejada
    console.log(formData);
    setSubmitted(true); // Define submitted como true para mostrar as informações do usuário
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
      <h2 className="text-lg font-bold mb-2 text-center">Introduza seus dados:</h2>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-pink-700">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-950 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-pink-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border--500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-pink-700">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-rose-950  rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-700 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-pink-700">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-rose-950 rounded-md shadow-sm focus:outline-none focus:ring-rose-500 focus:border-rose-500 sm:text-sm"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-rose-500 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Enviar
            </button>
          </div>
        </form>
        {submitted && (
          <div className="bg-white shadow-md rounded p-4">
            <h2 className="text-lg font-bold mb-2">Informações do Usuário:</h2>
            <p><strong>Nome:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Assunto:</strong> {formData.subject}</p>
            <p><strong>Mensagem:</strong> {formData.message}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;