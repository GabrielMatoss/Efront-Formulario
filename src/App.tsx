import { Form } from "./components/Form";
import eFrontLogo from "./assets/eFront.svg";
import { useState } from "react";

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl pb-4 ">
      <header className="flex items-center justify-between px-2 pt-8">
        <img src={eFrontLogo} alt="" />

        <button
          type="button"
          className="rounded-md border-2 border-green-primary px-4 py-3 font-sans text-sm 
          font-bold uppercase text-white-primary transition-colors hover:border-opacity-70"
        >
          comprar ebook
        </button>
      </header>

      <main className="mx-auto mt-14 max-w-md">
        <section className="flex flex-col items-center justify-between gap-5 text-center">
          <h1 className="font-Sora text-3xl font-semibold leading-normal text-white-primary">
            Seja bem-vindo a
            <br />
            sua melhor newsletter
          </h1>
          <p className="font-Inter text-xl font-medium leading-normal text-green-primary">
            Fique por dentro de todas a novidades
          </p>
        </section>

        <section className="mt-6 px-7">
          <p className="text-center font-Inter text-base font-medium leading-normal text-gray-primary">
            Preencha os campos para receber as notícias sobre programação
          </p>

          <Form setModalIsOpen={setModalIsOpen} />
        </section>
      </main>
      {modalIsOpen ? (
        <div className="fixed left-0 top-0 flex min-h-full w-full items-center justify-center px-5 backdrop-blur-[100px] backdrop-opacity-100 backdrop:bg-modalBg-backdrop">
          <div className="flex flex-col items-center justify-center gap-5 rounded border border-dark-secondary bg-modalBg-dark p-10 text-center">
            <p className="px-5 font-Sora text-xl font-normal leading-relaxed text-white-primary max-viewportCel:text-base">
              E-mail cadastrado com{" "}
              <strong className="font-semibold text-green-primary">
                sucesso
              </strong>
              !
            </p>
            <button
              className="h-10 w-full rounded bg-green-primary text-center font-Inter text-lg 
              font-semibold text-dark-primary transition-colors hover:opacity-75"
              onClick={() => setModalIsOpen(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
