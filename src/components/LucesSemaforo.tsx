import { useSemaforo } from "../context/SemaforoContext";

export const LucesSemaforo = () => {
  const { color } = useSemaforo();

  return (
    <div className="flex justify-center gap-12">
        
      <div
        className={`w-16 h-16 rounded-full bg-red-500 ${
          color === "rojo" ? "opacity-100" : "opacity-30"
        }`}
      ></div>

      <div
        className={`w-16 h-16 rounded-full bg-yellow-300 ${
          color === "amarillo" ? "opacity-100" : "opacity-30"
        }`}
      ></div>

      <div
        className={`w-16 h-16 rounded-full bg-green-500 ${
          color === "verde" ? "opacity-100" : "opacity-30"
        }`}
      ></div>

    </div>
  );
};
