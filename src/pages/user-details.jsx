import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useParams } from "react-router-dom";

export const UserDatails = () => {
  const params = useParams();
  const username = params.username ? params.username : "";
  const userNameParts = username ? username.split("-") : [];
  const handleLearnMore = () => {

    history.push(`/users/${username}/details`);
  };

  return (
    <>
      <Header />
      <main className="relative">
        <img
          src="/image-details.jpg"
          alt="NotFound"
          className="w-full h-auto"
          style={{ maxHeight: "100vh", objectFit: "cover" }}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
          <h1 className="text-4xl font-bold mb-4 font-serif text-gray-800">
            {userNameParts.length >= 2 ? (
              <>
                Olá, Eu Sou{" "}
                {userNameParts[0].charAt(0).toUpperCase() + userNameParts[0].slice(1)}{" "}
                {userNameParts[1].charAt(0).toUpperCase() + userNameParts[1].slice(1)}{" "}
                seja bem-vindo(a) a minha página. Como posso ser útil?{" "}
                <span
                  className="text-blue-500 cursor-pointer underline"
                  onClick={handleLearnMore}
                >
                </span>
              </>
            ) : (
              <>
                Bem-vindo(a) à minha página. Como posso ser útil?{" "}
                <span
                  className="text-blue-500 cursor-pointer underline"
                  onClick={handleLearnMore}
                >
                 
                </span>
              </>
            )}
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
};
