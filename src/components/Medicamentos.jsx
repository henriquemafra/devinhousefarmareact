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
    <>
      <div className="mt-2 mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl flex justify-center items-center">
        <h1>Adicionar medicamento</h1>
      </div>
      <div className="max-w-screen-lg mx-auto mt-2 flex flex-wrap justify-center items-center">
        <div className="flex flex-wrap justify-center items-center">
          <input
            className="m-2 p-2 border border-black custom-placeholder rounded"
            type="text"
            placeholder="Nome do medicamento"
          />
          <input
            className="m-2 p-2 border border-black custom-placeholder rounded"
            type="text"
            placeholder="Nome do laboratório"
          />
          <input
            className="m-2 p-2 border border-black custom-placeholder rounded"
            type="number"
            placeholder="Quantidade"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          <button
            className="m-2 buttons border-black border p-2 rounded"
          >
            Adicionar +
          </button>
        </div>
      </div>


      <div className="p-4  max-w-screen-lg mx-auto">
        <h1 className="text-center mb-4 text-md">Todos os medicamentos</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {medicamentos.map((medicamento) => (
            <div key={medicamento.id} className="border-gray-300 border text-center p-4 shadow rounded">
              <img className="w-2/4 mx-auto mb-4" src={medicamento.imagem} alt={medicamento.nome} />
              <h3 className="text-md">{limitarNome(medicamento.nome, 30)}</h3>
              <h2 className="text-lg">R$ {medicamento.preco.toFixed(2)}</h2>

              <div className="flex justify-between mt-4">
                <button className="rounded-full buttons ml-5 w-3/4 border-black border flex items-center justify-center">
                  Adicionar <SlBasket className="ml-2" />
                </button>
                <LikeButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}

export default Medicamentos;
