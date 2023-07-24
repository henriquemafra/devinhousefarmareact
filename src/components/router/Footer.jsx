import React from "react";
import { FaSquareInstagram, FaSquareFacebook, FaLinkedin, FaTiktok } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="mt-10">
      <div className="container shadow-2xl p-5 rounded mx-auto w-full pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-xs">
            <h5 className="font-bold mb-3">ONDE ESTAMOS</h5>
            <p>Endereço: 123 Rua Principal, Cidade, Estado</p>
            <p>Telefone: (123) 456-7890</p>
            <p>Horário de funcionamento: Segunda a Sexta, das 9h às 18h</p>
            <img
              className="w-11/12 mt-4"
              src="https://api.tomtom.com/map/1/staticimage?key=Rzwx8nxO0DZBZ4JCfslciBZqXvYbxLGG&center=-48.554481,-27.593824&zoom=14&width=800&height=800"
              alt="Mapa Estático"
            />
          </div>
          <div className="text-xs">
            <h5 className="font-bold mb-3">A EMPRESA</h5>
            <p>Sobre a empresa</p>
            <p>Nossas Filiais</p>
            <p>Serviços de Personalização</p>
            <p>Programa de Benefícios</p>
            <p>Parcerias Comerciais</p>
            <p>Oportunidades de Carreira</p>
            <p>Pesquisa de Opinião</p>
            <p>Folheto de Promoções</p>
          </div>
          <div className="text-xs">
            <h5 className="font-bold mb-3">AJUDA E SUPORTE</h5>
            <p>Certificado de Segurança</p>
            <p>Política de Privacidade</p>
            <p>Assinatura de Produtos</p>
            <p>Medicamentos com Receita</p>
            <p>Formas de Pagamento</p>
            <p>Entrega</p>
            <p>Tele Entrega</p>
            <p>Troca e Devolução</p>
            <p>Preferências de Cookies</p>
            <p>Autoteste Covid-19</p>
          </div>
          <div className="text-xs">
            <h5 className="font-bold mb-3">MINHA CONTA</h5>
            <p>Acessar</p>
            <p>Cadastrar</p>
            <p>Meus pedidos</p>
            <p>Editar endereços</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-xl ml-2">
            <FaSquareInstagram />
          </div>
          <div className="text-xl ml-2">
            <FaSquareFacebook />
          </div>
          <div className="text-xl ml-2">
            <FaLinkedin />
          </div>
          <div className="text-xl ml-2">
            <FaTiktok />
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            Desenvolvido por Henrique Mafra exclusivamente para fins educacionais. | Todos os direitos reservados &copy; 2023.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
