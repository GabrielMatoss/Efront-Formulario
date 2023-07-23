import { Form } from "./components/Form";
import eFrontLogo from "./assets/eFront.svg";
import { useState } from "react";

export function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl pb-4">
      <header className="flex items-center justify-between px-5 pt-8">
        <img src={eFrontLogo} alt="" />

        <a
          href="https://iuricode.com/efront/"
          target="_blank"
          type="button"
          className="rounded-md border-2 border-green-primary px-4 py-3 font-sans text-sm font-bold 
          uppercase text-white-primary transition-opacity hover:border-opacity-75 hover:text-opacity-75 max-viewportCel:p-3 max-viewportCel:text-xs"
        >
          comprar ebook
        </a>
      </header>

      <main className="mx-auto mt-12 max-w-md">
        <section className="flex flex-col items-center justify-between gap-5 text-center max-viewportCel:px-4 ">
          <h1 className="font-Sora text-3xl font-semibold leading-normal text-white-primary max-viewportCel:text-2xl">
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
        <div
          onClick={() => setModalIsOpen(false)}
          className="fixed left-0 top-0 flex min-h-full w-screen items-center justify-center px-5 backdrop-blur-[100px] backdrop-opacity-100 backdrop:bg-modalBg-backdrop"
        >
          <div className="flex flex-col items-center justify-center gap-5 rounded border border-dark-secondary bg-modalBg-dark p-10 text-center max-viewportCel:p-6">
            <p className="px-5 font-Sora text-xl font-normal leading-relaxed text-white-primary max-viewportCel:px-4">
              E-mail cadastrado com{" "}
              <strong className="font-semibold text-green-primary">
                sucesso
              </strong>
              !
            </p>
            <button
              className="h-10 w-full rounded bg-green-primary text-center font-Inter text-lg 
              font-semibold text-dark-primary transition-opacity hover:opacity-80"
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
