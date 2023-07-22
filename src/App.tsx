import { Form } from "./components/Form";
import eFrontLogo from "./assets/eFront.svg";
import { useState } from "react";

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto pb-4 ">
      <header className="pt-8 px-2 flex items-center justify-between">
        <img src={eFrontLogo} alt="" />

        <button
          type="button"
          className="font-sans text-sm font-bold py-3 px-4 border-2 border-green-primary 
          hover:border-opacity-70 transition-colors rounded-md uppercase text-white-primary"
        >
          comprar ebook
        </button>
      </header>

      <main className="max-w-md mx-auto mt-14">
        <section className="text-center flex flex-col items-center justify-between gap-5">
          <h1 className="font-Sora text-3xl leading-normal font-semibold text-white-primary">
            Seja bem-vindo a
            <br />
            sua melhor newsletter
          </h1>
          <p className="font-Inter font-medium text-xl leading-normal text-green-primary">
            Fique por dentro de todas a novidades
          </p>
        </section>

        <section className="mt-6 px-7">
          <p className="text-gray-primary font-Inter font-medium text-base leading-normal text-center">
            Preencha os campos para receber as notícias sobre programação
          </p>

          <Form setModalIsOpen={setModalIsOpen} />
        </section>
      </main>
      {modalIsOpen ? (
        <div className="bg-dark-primary opacity-30">
          <div className="bg-slate-400">
            <p>E-mail cadastrado com sucesso!</p>
            <button onClick={() => setModalIsOpen(false)}>Fechar</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
