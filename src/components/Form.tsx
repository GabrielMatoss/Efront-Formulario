import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().nonempty("Digite um nome"),
  email: z
    .string()
    .nonempty("Digite um e-mail")
    .email("Formato de e-mail inválido"),
});

type FormDataInputs = z.infer<typeof formSchema>;

interface ModalProps {
  setModalIsOpen: (isOpen: boolean) => void;
}

export function Form({ setModalIsOpen }: ModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataInputs>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitData(data: FormDataInputs) {
    //localStorage.setItem("formdata", JSON.stringify(data));
    console.log(data);
    reset({
      name: "",
      email: "",
    });

    setModalIsOpen(true);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className="mt-6 space-y-5">
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
          pl-2 text-gray-primary outline-none invalid:bg-slate-400 focus:border-green-primary hover:border-green-primary transition-colors "
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}
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
          pl-2 text-gray-primary outline-none focus:border-green-primary hover:border-green-primary transition-colors"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="flex items-center justify-center bg-green-primary w-full py-1 font-Inter font-semibold 
        text-lg text-dark-primary rounded disabled:cursor-not-allowed disabled:opacity-60 hover:opacity-75 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
}
