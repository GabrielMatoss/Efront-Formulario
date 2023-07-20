import { useForm } from "react-hook-form";

export function Form() {
  const { register, handleSubmit, reset } = useForm();

  function handleSubmitData(data: any) {
    localStorage.setItem("formdata", JSON.stringify(data));
    console.log(data);
    reset({
      name: "",
      email: "",
    });
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className="mt-8 space-y-7">
      <div className="flex flex-col">
        <label
          htmlFor="name"
          className="font-Inter font-medium text-sm text-gray-primary"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="bg-dark-primary h-8 rounded border border-dark-secondary
          pl-2 text-gray-primary outline-none focus:border-green-primary"
          required
          {...register("name")}
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
          type="email"
          id="email"
          className="bg-dark-primary h-8 rounded border border-dark-secondary
          pl-2 text-gray-primary outline-none focus:border-green-primary"
          {...register("email")}
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
