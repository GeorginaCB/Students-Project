import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useNavigate, useParams, Link } from "react-router-dom";

export const UserDatails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const username = params.username ? params.username : "";
  const userNameParts = username ? username.split("-") : [];

  const handleLearnMore = () => {
    navigate(`/users/${username}/details`);
  };

  return (
    <>
      <Header />
      <main
         className="relative overflow-y-auto bg-cover bg-center"
         style={{
           backgroundImage: `url('/image-details.avif')`,
           minHeight: "calc(100vh - 80px)", 
           padding: "20px", 
           backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
           "@media (max-width: 768px)": {
             minHeight: "calc(100vh - 120px)", 
           },
         }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4 md:px-0">
          <h1 className="text-xl md:text-2xl lg:text-3xl mb-4 font-serif text-gray-800">
            {userNameParts.length >= 2 ? (
              <>
                Olá, Eu Sou{" "}
                {userNameParts[0].charAt(0).toUpperCase() +
                  userNameParts[0].slice(1)}{" "}
                {userNameParts[1].charAt(0).toUpperCase() +
                  userNameParts[1].slice(1)}{" "}
                seja bem-vindo(a) a minha página. Como posso ser útil?
              </>
            ) : (
              <>
                <p className="text-base md:text-lg lg:text-lg mb-4 m-3 text-justify">
                  Engenheiro Agrônomo: Especializado em ciências agrícolas, focando na melhoria da
                  produção agrícola e na sustentabilidade ambiental. Oferece serviços como planejamento
                  e gestão de propriedades rurais, consultoria técnica, projetos de irrigação, pesquisa
                  agrícola e educação agrícola.
                </p>
                <p className="text-base md:text-lg lg:text-xl mb-4 m-3 text-justify">
                  Desenvolvedor Full-Stack Júnior: Capacitado para desenvolver tanto o front-end quanto
                  o back-end de aplicações web. Realiza programação utilizando HTML, CSS, JavaScript,
                  frameworks como React, e Node.js para desenvolvimento de APIs, além de manutenção e
                  otimização de aplicações web.
                </p>
                <p className="text-base md:text-lg lg:text-xl mb-4 m-3 text-justify">
                  Sinergia entre Ambos: Colaboração em projetos para desenvolvimento de aplicações
                  agrícolas, análise de dados agrícolas e automação de processos. Combinação de
                  habilidades para criar soluções inovadoras que integram conhecimentos agronômicos e
                  tecnológicos. Essa combinação de competências pode resultar em soluções tecnológicas
                  avançadas para desafios agrícolas, contribuindo para melhorias na eficiência e
                  sustentabilidade do setor agrícola.
                </p>
              </>
            )}
          </h1>
          <div className="mt-4 flex justify-center space-x-4">
            <Link
              to="/"
              className="text-blue-500 cursor-pointer underline text-sm md:text-base lg:text-lg"
            >
              Voltar para a página inicial
            </Link>
            <Link
              to="/users"
              className="text-blue-500 cursor-pointer underline text-sm md:text-base lg:text-lg"
            >
              Voltar para a lista de usuários
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
