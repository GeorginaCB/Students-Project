import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo, GithubLogo  } from "@phosphor-icons/react";
export const Footer = () => {
  return (
    <footer className="bg-rose-700 text-white py-4">
  <div className="container mx-auto px-4 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="w-full">
      <h3 className="text-lg font-bold">Meu Projeto</h3>
      <p>© 2024 Todos os direitos reservados</p>
      <p>Termos de uso</p>
      <p>Política de privacidade</p>
    </div>
    <div className="w-full">
      <h3 className="text-lg font-bold">Encontre-nos aqui</h3>
      <p>Endereço: 1 de Maio, Cidade-Matola</p>
      <p>Telefone: (+258) 842945038 / 865565859</p>
      <p><a href="mailto:georginadavidcumbe@gmail.com">georginadavidcumbe@gmail.com</a></p>
    </div>
    <div className="w-full">
  <div className="text-center mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
    <h3 className="text-lg font-bold">Redes Sociais</h3>
    
    <ul className="list-none py-2 px-14">
      <li className="flex items-center mt-2 ">
        <FacebookLogo className="mr-2" size={22} />
        <a href="https://www.facebook.com/georginadavid.cumbe" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
          Facebook
        </a>
      </li>
      <li className="flex items-center mt-2">
        <InstagramLogo className="mr-2" size={22} />
        <a href="https://www.instagram.com/georgina_cumbe?igsh=ZDRsOTlnZ3R3Z3I5" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
          Instagram
        </a>
      </li>
      <li className="flex items-center mt-2">
        <LinkedinLogo className="mr-2" size={22} />
        <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BOc9NfZEpQC6VI7Zojas4Mw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
          Linkedin
        </a>
      </li>
      <li className="flex items-center mt-2">
        <GithubLogo className="mr-2" size={22} />
        <a href="https://github.com/GeorginaCB/Georgina-Cumbe.git" target="_blank" rel="noopener noreferrer" className="text-rose-950 hover:underline">
          Github
        </a>
      </li>
    </ul>
  </div>
</div>
    <div className="w-full">
      <h3 className="text-lg font-bold">Formas de Pagamento</h3>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <img src="/Logo-1.jpg" alt="Logo" className="h-16" />
        <img src="/Logo-2.jpg" alt="Logo" className="h-16" />
        <img src="/Logo-3.jpg" alt="Logo" className="h-16" />
      </div>
    </div>
  </div>
</footer>
  );
};
