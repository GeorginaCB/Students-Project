import React, { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Header } from "../components/header";
import { users as initialUsers } from "../data/users";
import { Footer } from "../components/footer";
import { MagnifyingGlass, Plus, XCircle } from "@phosphor-icons/react";

export const Users = () => {
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
    const foundUser = users.find((user) =>
      user.linkLabel.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (foundUser) {
      setSearchMessage("");
      console.log("Pesquisar por:", searchTerm);
    } else {
      setSearchMessage(
        `O nome "${searchTerm}" não faz parte da lista de usuários. Por favor introduza um nome que faça parte da lista.`
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto p-4 flex-1 mb-2">
        <div className="flex flex-col md:flex-row items-center">
          <form
            onSubmit={handleSearchSubmit}
            className="flex space-x-2 items-center md:mr-2"
          >
            <input
              type="text"
              placeholder="Pesquisar nome"
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 border border-gray-300 rounded-md w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-rose-950 px-4 py-2 rounded-md hover:bg-rose-700 text-white"
            >
              <MagnifyingGlass size={24} />
            </button>
          </form>
          <form onSubmit={handleAddUser} className="flex space-x-2 items-center">
            <input
              type="text"
              placeholder="Adicionar nome"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-rose-950 px-4 py-2 rounded-md hover:bg-rose-700 text-white"
            >
              <Plus size={24} />
            </button>
          </form>
        </div>
        {searchMessage && (
          <div className="p-2 bg-rose-700 text-white rounded-md mb-2">
            {searchMessage}
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto p-4 mb-32">
        {getFilteredUsers().map((user) => (
          <div
            key={user.id}
            className="p-4 border border-gray-300 rounded-md flex justify-between items-center"
          >
            <Link to={user.linkUrl} className="text-rose-700 hover:underline">
              {user.linkLabel}
            </Link>
            <button
              onClick={() => handleDelete(user.id)}
              className="ml-2 text-rose-700 hover:text-rose-400 focus:outline-none"
            >
              <XCircle size={24} />
            </button>
          </div>
        ))}
      </div>
      <Footer className="mt-auto" />
    </div>
  );
};
