import React from "react";
import { SlBasket } from "react-icons/sl";
import LikeButton from "../LikeButton";
import MedicamentoForm from "./MedicamentoForm";
import medicamentos from './medicamentos.json'

function limitarNome(nome, limite) {
  if (nome.length <= limite) return nome;
  return nome.substring(0, limite) + "...";
}

function Medicamentos() {
 
  return (
    <>
    <MedicamentoForm />
          <div className="p-4 shadow-2xl max-w-screen-lg mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {medicamentos.map((medicamento) => (
            <div key={medicamento.id} className="border-gray-300 border text-center p-4 shadow rounded">
              <img className="w-2/4 mx-auto mb-4" src={medicamento.imagem} alt={medicamento.nome} />
              <h3 className="text-xs">{limitarNome(medicamento.nome, 30)}</h3>
              <h2 className="text-md">R$ {medicamento.preco.toFixed(2)}</h2>

              <div className="flex justify-between mt-4">
                <button className="rounded-full buttons ml-5 w-3/4 border-black border text-xs flex items-center justify-center">
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