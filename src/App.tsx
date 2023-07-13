import eFrontLogo from "./assets/eFront.svg";

export function App() {
  return (
    <main className=" max-w-7xl mx-auto">
      <header className="pt-8 px-2 flex items-center justify-between">
        <img src={eFrontLogo} alt="" />

        <button
          type="button"
          className="font-sans text-sm font-bold py-4 px-6 border border-green-primary rounded-md uppercase
          text-white-primary"
        >
          comprar ebook
        </button>
      </header>
    </main>
  );
}
