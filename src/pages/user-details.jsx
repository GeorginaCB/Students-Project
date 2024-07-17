import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useParams } from "react-router-dom";

const UserDatails = () => {
  const params = useParams();

  return (
    <>
      <Header />
      <main className="relative">
        <img src="/image-details.jpg" alt="NotFound" className="w-full h-auto" style={{ maxHeight: '100vh', objectFit: 'cover' }} />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
          <h1 className="text-4xl font-bold mb-4 font-serif text-gray-800">
            Olá, Eu Sou {" "}
            {params.username.split("-")[0].charAt(0).toUpperCase() +
              params.username.split("-")[0].slice(1)}{" "}
            {params.username.split("-")[1].charAt(0).toUpperCase() +
              params.username.split("-")[1].slice(1)} seja bem-vindo(a) a minha página. Como posso ser útil?
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default UserDatails;
