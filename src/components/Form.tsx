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

type ModalProps = {
  setModalIsOpen: (isOpen: boolean) => void;
};

export function Form({ setModalIsOpen }: ModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataInputs>({
    resolver: zodResolver(formSchema),
  });

  function handleSubmitData() {
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
          className="font-Inter text-sm font-medium text-gray-primary"
        >
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="h-8 rounded border border-dark-secondary bg-dark-primary
          pl-2 text-gray-primary outline-none transition-colors invalid:bg-slate-400 hover:border-green-primary focus:border-green-primary "
          {...register("name")}
        />
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="font-Inter text-sm font-medium text-gray-primary"
        >
          E-mail
        </label>
        <input
          type="email"
          id="email"
          className="h-8 rounded border border-dark-secondary bg-dark-primary
          pl-2 text-gray-primary outline-none transition-colors hover:border-green-primary focus:border-green-primary"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center rounded bg-green-primary py-1 font-Inter 
        text-lg font-semibold text-dark-primary transition-colors hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Enviar
      </button>
    </form>
  );
}
