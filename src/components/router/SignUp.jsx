import React from "react";

export default SignUp

function SignUp() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" p-6 rounded shadow-2xl w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Cadastre-se</h1>
                <form className="flex flex-col">
                    <input
                        className="px-3 py-2 custom-placeholder border rounded border-gray-400 mb-4"
                        type="text"
                        placeholder="Digite seu nome"
                    />
                    <input
                        className="px-3 py-2 custom-placeholder border rounded border-gray-400 mb-4"
                        type="text"
                        placeholder="E-mail"
                    />
                    <input
                        className="px-3 py-2 border custom-placeholder rounded border-gray-400 mb-4"
                        type="password"
                        placeholder="Digite sua senha"
                    />
                    <input
                        className="px-3 py-2 border custom-placeholder rounded border-gray-400 mb-4"
                        type="password"
                        placeholder="Digite novamente a senha"
                    />
                    <p className="text-sm py-1"> Ao clicar em cadastrar, você concorda com nossos termos e condições de uso.</p>
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                        type="submit"
                    >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );

}

