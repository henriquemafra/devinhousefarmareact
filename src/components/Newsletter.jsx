import React from 'react';
import { FaEnvelope } from 'react-icons/fa6';
import Button from './Button';

const Newsletter = () => {
  return (
    <div className="newsletter lg:flex items-center justify-center pt-20 py-6">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex items-center justify-center pb-2">
            <div className="col-auto">
              <FaEnvelope className="text-primary text-2xl" />
            </div>
            <div>
              <h5 className="text-primary p-2 font-semibold text-lg">CADASTRE-SE</h5>
              <p className="text-sm p-2">Junte-se à nossa lista de e-mails para receber as últimas notícias e novidades.</p>
            </div>
          </div>
          <form className="flex justify-center mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md mx-auto">
              <input
                className="input-form border rounded p-2 custom-placeholder md:col-span-2 w-full"
                type="email"
                required
                placeholder="Digite seu email"
              />
              <input
                className="input-form border rounded custom-placeholder p-2 w-full"
                type="nome"
                required
                placeholder="Digite seu nome"
              />
              <Button color="primary" className="B-form  btn-primary w-full" type="submit">Cadastrar</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
