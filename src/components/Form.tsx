import { ChangeEvent, FormEvent, useState } from "react";

interface appFormProps {
  name: string;
  email: string;
}

export function Form() {
  const [formState, setFormState] = useState<appFormProps>({
    name: "",
    email: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>, key: string) {
    setFormState((state) => {
      return { ...state, [key]: event.target.value };
    });

    console.log(Object.keys(formState));
  }

  function formEventInput(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formState);
  }

  return (
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
  );
}
