import './App.css'
import { SemaforoProvider } from './context/SemaforoContext';
import { LucesSemaforo } from './components/LucesSemaforo';
import { BotonesSemaforo } from './components/BotonesSemaforo';
import { ParteTeorica } from './components/ParteTeorica';

function App() {
  return (
    <SemaforoProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">

        <h1 className="text-4xl font-bold mb-6">Semáforo</h1>

        <LucesSemaforo/>
        <BotonesSemaforo/>

        <br />
        <div>
          <ParteTeorica/>
        </div>

      </div>

    </SemaforoProvider>
  );
}

export default App;
