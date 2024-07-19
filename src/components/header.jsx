import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-rose-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <p className="h-10 mr-3">Projeto Geor</p>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/" className="mr-4 hover:text-rose-950">
            <span className="text-sm">Home</span>
          </Link>
          <Link to="/users" className="mr-4 hover:text-rose-950">
            <span className="text-sm">Lista de Estudantes</span>
          </Link>
          <Link to="/contact" className="hover:text-rose-950">
            <span className="text-sm">Contacte-nos</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-rose-700 text-white py-2 px-4">
          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/users"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Lista de Estudantes
            </Link>
            <Link
              to="/contact"
              className="text-sm block py-1 hover:text-rose-950"
              onClick={toggleMenu}
            >
              Contacte-nos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
