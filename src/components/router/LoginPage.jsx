import React from "react";
import { Link } from "react-router-dom";

export default LoginPage

function LoginPage() {
    return (
        <div className="flex justify-center items-center h-screen">
          <div className=" p-6 rounded shadow-2xl w-96">
            <h1 className="text-2xl font-bold mb-6 text-center">Fazer login</h1>
            <form className="flex flex-col">
              <input
                className="px-3 py-2 custom-placeholder border rounded border-gray-400 mb-4"
                type="text"
                placeholder="E-mail"
              />
              <input
                className="px-3 py-2 border custom-placeholder rounded border-gray-400 mb-4"
                type="password"
                placeholder="Senha"
              />
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                type="submit"
              >
                Entrar
              </button>
            </form>
            <p className="text-sm mt-4 text-center">
              Não tem cadastro? <Link to="/signup">Crie agora mesmo.</Link>
            </p>
          </div>
        </div>
      );

}

