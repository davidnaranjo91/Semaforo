import { useSemaforo } from "../context/SemaforoContext";

export const BotonesSemaforo = () => {
  const { setColor } = useSemaforo();

  return (
    <div className="flex space-x-4 mt-6">
      <button className="px-6 py-2 bg-red-500 text-white rounded" onClick={() => setColor("rojo")}>Rojo</button>
      <button className="px-6 py-2 bg-yellow-300 text-black rounded" onClick={() => setColor("amarillo")}>Amarillo</button>
      <button className="px-6 py- bg-green-500 text-white rounded" onClick={() => setColor("verde")}>Verde</button>
    </div>
  );
};