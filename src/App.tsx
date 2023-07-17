import { useState } from "react";
import eFrontLogo from "./assets/eFront.svg";

interface appFormProps {
  name: string;
  email: string;
}
//pelo que eu entendi, vamos ter que criar de alguma forma um sistema que armazene as contas criadas,
// e as verifique e acesse a rota se ja tiver cadastrado ou nao.
export function App() {
  const [formState, setFormState] = useState<appFormProps>({
    name: "",
    email: "",
  });

  function handleInput(event: any, key: any) {
    setFormState((state) => {
      return { ...state, [key]: event.target.value };
    });
  }

  function formEventInput(event: any) {
    event.preventDefault();
    console.log(formState);
  }
  return (
    <div className="max-w-7xl mx-auto pb-4">
      <header className="pt-8 px-2 flex items-center justify-between">
        <img src={eFrontLogo} alt="" />

        <button
          type="button"
          className="font-sans text-sm font-bold py-3 px-4 border border-green-primary rounded-md uppercase
          text-white-primary"
        >
          comprar ebook
        </button>
      </header>

      <main className="max-w-md mx-auto mt-[70px]">
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

        <section className="mt-8 px-7">
          <p className="text-gray-primary font-Inter font-medium text-base leading-normal text-center">
            Preencha os campos para receber as notícias sobre programação
          </p>

          <form className="mt-8 space-y-7" onSubmit={formEventInput}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="font-Inter font-medium text-sm text-gray-primary"
              >
                Nome
              </label>
              <input
                value={formState.name}
                onChange={(event) => handleInput(event, "name")}
                type="text"
                name="name"
                id="name"
                className="bg-dark-primary h-8 rounded border border-dark-secondary
                pl-2 text-gray-primary focus:outline-none focus:border-green-primary"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="font-Inter font-medium text-sm text-gray-primary"
              >
                E-mail
              </label>
              <input
                value={formState.email}
                onChange={(event) => handleInput(event, "email")}
                name="email"
                type="email"
                id="email"
                className="bg-dark-primary h-8 rounded border border-dark-secondary
                pl-2 text-gray-primary"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-green-primary w-full py-1 font-Inter font-semibold 
              text-lg text-dark-primary rounded disabled:cursor-not-allowed disabled:opacity-60"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
