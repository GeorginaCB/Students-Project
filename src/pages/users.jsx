import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "../components/header";
import { users as initialUsers } from "../data/users";
import { Footer } from "../components/footer";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Users = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
  const [users, setUsers] = useState(initialUsers);
  const [newUserName, setNewUserName] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getFilteredUsers = () => {
    if (!searchTerm) {
      return users;
    } else {
      const normalizedSearchTerm = searchTerm.toLowerCase();
      return users.filter((user) =>
        user.linkLabel.toLowerCase().includes(normalizedSearchTerm)
      );
    }
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleAddUser = (event) => {
    event.preventDefault();
    if (newUserName.trim() === "") return;

    const newUser = {
      id: Date.now(),
      linkUrl: `/users/${newUserName.toLowerCase().replace(/\s/g, "-")}`,
      linkLabel: newUserName.trim(),
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setNewUserName("");
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    // Verifica se o nome pesquisado está na lista
    const foundUser = users.find((user) =>
      user.linkLabel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (foundUser) {
      setSearchMessage("");
      // Implemente sua lógica de pesquisa aqui, se necessário
      console.log("Pesquisar por:", searchTerm);
    } else {
      setSearchMessage(`O nome "${searchTerm}" não faz parte da lista de usuários. Por favor introduza um nome que faça parte da lista.`);
    }
  };

  
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <div className="flex items-center mb-4">
          <form onSubmit={handleSearchSubmit} className="flex">
            <input
              type="text"
              placeholder="Pesquisar nome"
              value={searchTerm}
              onChange={handleSearchChange}
              className="mr-2 p-2 border border-gray-300 rounded-md flex-1"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white"
            >
              <MagnifyingGlass size={32} />
            </button>
          </form>
          <form onSubmit={handleAddUser} className="flex ml-4">
            <input
              type="text"
              placeholder="Adicionar nome"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </form>
        </div>
        {searchMessage && (
          <div className="p-2 bg-blue-600 text-black rounded-md mb-4 hover:text-blue-800">
            {searchMessage}
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto p-4">
        {getFilteredUsers().map((user) => (
          <div key={user.id} className="p-4 border border-gray-300 rounded-md">
            <Link to={user.linkUrl} className="text-blue-600 hover:underline">
              {user.linkLabel}
            </Link>
            <button
              onClick={() => handleDelete(user.id)}
              className="ml-2 text-blue-600 hover:text-blue-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block align-middle"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-12.293a1 1 0 00-1.414 1.414L10 8.414l-2.293-2.293a1 1 0 00-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 001.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Users;