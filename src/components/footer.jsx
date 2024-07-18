import React from 'react';
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
export const Footer = () => {
  return (
    <footer className="bg-rose-700 text-white py-4 px-4">
      <div className="flex  gap-3">
        <div className="w-full md:w-1/3">
          <h3 className="text-lg font-bold">Meu Projeto</h3>
          <p>© 2024 Todos os direitos reservados</p>
          <p>Termos de uso</p>
          <p>Política de privacidade</p>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-lg font-bold">Encontre-nos aqui</h1>
          <p>Endereço: 1 de Maio, Cidade-Matola</p>
          <p>Telefone: (+258) 842945038/ 865565859</p>
          <p><a href="mailto:georginadavidcumbe@gmail.com">georginadavidcumbe@gmail.com</a></p>
        </div>
        <div className="w-full md:w-1/3">
          <ul className="list-none px-4 py-2 rounded-md">
            <h1 className="text-lg font-bold">Redes Sociais</h1>
            <li className="flex items-center mt-2">
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
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h1 className="text-lg font-bold">Formas de Pagamento</h1>
          <ul className="flex flex-wrap gap-3">
            <li><img src="/Logo-1.jpg" alt="Logo" className="h-16 mr-3" /></li>
            <li><img src="/Logo-2.jpg" alt="Logo" className="h-16 mr-3" /></li>
            <li><img src="/Logo-3.jpg" alt="Logo" className="h-16 mr-3" /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
