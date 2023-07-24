import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import LikeButton from "../LikeButton";

const MedicamentoForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [nome, setNome] = useState("");
  const [laboratorio, setLaboratorio] = useState("");
  const [preco, setPreco] = useState(0);
  const [medicamentos, setMedicamentos] = useState([]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoMedicamento = {
      id: medicamentos.length + 1,
      nome,
      laboratorio,
      preco,
      quantidade: 1,
    };
    setMedicamentos([...medicamentos, novoMedicamento]);
    setNome("");
    setLaboratorio("");
    setPreco(0);
  };

  return (
    <>
      <div className="mt-20 mx-auto pr-2 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col">
          <div className="z-1">
            <button
              className={`m-2 text-sm justify-center buttons border-black border px-2 rounded ${showForm ? "sm:w-auto sm:text-center" : ""}`}
              onClick={toggleForm}
            >
              + Medicamento
            </button>
            {showForm && (
              <div className="p-5 pl-2">
                <form onSubmit={handleSubmit}>
                  <input
                    className="m-2 p-2 border border-black custom-placeholder rounded w-full"
                    type="text"
                    placeholder="Nome do medicamento"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                  <input
                    className="m-2 p-2 border border-black custom-placeholder rounded w-full"
                    type="text"
                    placeholder="Nome do laboratório"
                    value={laboratorio}
                    onChange={(e) => setLaboratorio(e.target.value)}
                  />
                  <input
                    className="m-2 p-2 border border-black custom-placeholder rounded w-full"
                    type="number"
                    label="Preço"
                    step="0.01"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(parseFloat(e.target.value))}
                  />
                  <button
                    className="m-2 buttons border-black border p-2 rounded w-full"
                    type="submit"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4  max-w-screen-lg mx-auto">
        <h1 className="text-center mb-4 text-md">Todos os Medicamentos</h1>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {medicamentos.map((medicamento) => (
                       <div key={medicamento.id} className="border-gray-300 border text-center p-4 shadow rounded">
                       <img className="w-2/4 mx-auto mb-4" src="/src/assets/img/remedio.png" alt={medicamento.nome} />
                       <h3 className="text-xs">{medicamento.nome}</h3>
                       <h2 className="text-md">R$ {medicamento.preco}</h2>
         
                       <div className="flex justify-between mt-4">
                         <button className="rounded-full buttons ml-5 w-3/4 border-black text-xs border flex items-center justify-center">
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
};

export default MedicamentoForm;
