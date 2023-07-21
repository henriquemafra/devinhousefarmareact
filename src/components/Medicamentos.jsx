import React from "react";
import { SlBasket } from "react-icons/sl";
import LikeButton from "./LikeButton";

function limitarNome(nome, limite) {
  if (nome.length <= limite) return nome;
  return nome.substring(0, limite) + "...";
}

function Medicamentos() {
  const medicamentos = [
    {
      id: 1,
      nome: "Shampoo Grecin Control Gx Redutor De Grisalhos 147ml",
      preco: 22.89,
      imagem: './public/produtos/1.webp',
      quantidade: 1,
    },
    {
      id: 2,
      nome: "Isdin Fusion Water Protetor Solar 30ml Fps60 Oil Control",
      preco: 38.76,
      imagem: "./public/produtos/2.webp",
      quantidade: 1,
    },
    {
      id: 3,
      nome: "Cloreto De Magnesio Medinal Com 100 Capsulas 500mg",
      preco: 25.76,
      imagem: "./public/produtos/6.webp",
      quantidade: 1,
    },
    {
      id: 4,
      nome: "Cimegripe 400mg Com 20 Cápsulas",
      preco: 12.96,
      imagem: "./public/produtos/3.webp",
      quantidade: 1,
    },
    {
      id: 5,
      nome: "Baristar Suplemento Com 100 Cápsulas",
      preco: 16.96,
      imagem: "./public/produtos/5.webp",
      quantidade: 1,
    },
    {
      id: 6,
      nome: "Simeticona Biosintética 125mg Com 10 Cápsulas",
      preco: 14.76,
      imagem: "./public/produtos/4.webp",
      quantidade: 1,
    },
  ];


  return (
    <div className="p-4  max-w-screen-lg mx-auto">
    <h1 className="text-center mb-4 text-md">Todos os medicamentos</h1>
    <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
      {medicamentos.map((medicamento) => (
        <div key={medicamento.id} className="bg-white border-gray-300 border text-center p-4 shadow rounded">
          <img className="w-2/4 mx-auto mb-4" src={medicamento.imagem} alt={medicamento.nome} />
          <h3 className="text-md">{limitarNome(medicamento.nome, 30)}</h3>
          <h2 className="text-lg">R$ {medicamento.preco.toFixed(2)}</h2>

          <div className="flex justify-between mt-4">
            <button className="rounded-full ml-5 w-3/4 text-white bg-blue-700 flex items-center justify-center">
              Adicionar <SlBasket className="ml-2" />
            </button>
            <LikeButton />
          </div>
        </div>
      ))}
    </div>
  </div>

  );
}

export default Medicamentos;
