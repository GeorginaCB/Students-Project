import React, { useState } from "react";
import { XCircle } from "@phosphor-icons/react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="flex flex-col ">
      <Header />
      <div className="flex-grow">
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mt-36 mb-24 sm:px-6.lg:px-8"
        >
          <h2 className="text-lg font-bold mb-2 text-center">Introduza seus dados:</h2>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-pink-700"
            >
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
            <label
              htmlFor="email"
              className="block text-sm font-medium text-pink-700"
            >
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
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-pink-700"
            >
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
            <label
              htmlFor="message"
              className="block text-sm font-medium text-pink-700"
            >
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
          <div className="max-w-lg mx-auto bg-rose-500 shadow-md rounded px-8 pt-6 pb-8 mb-4 sm:px-6 lg:px-8hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-white hover:text-white focus:outline-none"
            >
              <XCircle size={24} />
            </button>
            <h2 className="text-lg font-bold mb-2 text-white">
              Informações do Usuário:
            </h2>
            <p className="text-white">
              <strong>Nome:</strong> {formData.name}
            </p>
            <p className="text-white">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="text-white">
              <strong>Assunto:</strong> {formData.subject}
            </p>
            <p className="text-white">
              <strong>Mensagem:</strong> {formData.message}
            </p>
          </div>
        )}
      </div>

      <Footer className="mt-auto" /> 
    </div>
  );
};

 
