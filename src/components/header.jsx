import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="bg-rose-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <img src="/image-logo.jpg" alt="Logo" className="h-10 mr-3" /> 
        </div>

        <div className="flex items-center">
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
      </div>
    </nav>
  );
};
