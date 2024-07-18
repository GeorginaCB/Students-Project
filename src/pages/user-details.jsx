import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useNavigate, useParams } from "react-router-dom";

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
      <main className="relative">
        <img
          src="/image-details.jpg"
          alt="NotFound"
          className="w-full h-auto"
          style={{ maxHeight: "100vh", objectFit: "cover" }}
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full">
          <h1 className="text-2xl mb-4 font-serif text-gray-800">
            {userNameParts.length >= 2 ? (
              <>
                Olá, Eu Sou{" "}
                {userNameParts[0].charAt(0).toUpperCase() + userNameParts[0].slice(1)}{" "}
                {userNameParts[1].charAt(0).toUpperCase() + userNameParts[1].slice(1)}{" "}
                seja bem-vindo(a) a minha página. Como posso ser útil?
              </>
            ) : (
              <>
  Engenheiro Agrônomo:
  Especializado em ciências agrícolas, focando na melhoria da produção agrícola e na sustentabilidade ambiental.
  Oferece serviços como planejamento e gestão de propriedades rurais, consultoria técnica, projetos de irrigação, pesquisa agrícola e educação agrícola.
  Desenvolvedor Full-Stack Júnior:
  Capacitado para desenvolver tanto o front-end quanto o back-end de aplicações web.
  Realiza programação utilizando HTML, CSS, JavaScript, frameworks como React, e Node.js para desenvolvimento de APIs, além de manutenção e otimização de aplicações web.
  Sinergia entre Ambos:
  Colaboração em projetos para desenvolvimento de aplicações agrícolas, análise de dados agrícolas e automação de processos.
  Combinação de habilidades para criar soluções inovadoras que integram conhecimentos agronômicos e tecnológicos.
  Essa combinação de competências pode resultar em soluções tecnológicas avançadas para desafios agrícolas, contribuindo para melhorias na eficiência e sustentabilidade do setor agrícola.
              </>
            )}
          </h1>

          <span
            className="text-blue-500 cursor-pointer underline"
            onClick={handleLearnMore}
          >
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
};
