
import React from "react";

export const ParteTeorica = () => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-4">Parte Teórica</h2>
      <ol className="list-decimal space-y-2 pl-4 text-left">
        <li>
          <strong>¿Qué hace el hook useState?</strong>
          <br/>
          <p><strong>userState</strong> permite a los componentes tener un estado interno, es decir que guarda y modifica valores, retorna un array con el valor actual del estado y una funcion para actualizarlo</p>
          <br/>
          <strong>Ejemplo</strong>
          <br/>
          <p>const [contador, setContador] = useState(0);</p>
        </li>
        <li>
          <strong>¿Qué es un fragmento?</strong> 
          <br/>
          <p>Sirve para agrupar varios elementos sin agregar un nodo extra en el DOM, como una etiqueta div o p </p>
          <p>Esto es útil cuando necesitas devolver varios elementos desde un componente sin crear un contenedor extra como un div</p>
          <br/>
        </li>
        <li>
          <strong>¿Qué diferencia hay entre useContext y useState?</strong> 
          <br/>
          <strong>useState: </strong>
          <p>Sirve para manejar un estado logal de un componente y permite actualizar el estado de un avariable, de manera que cuandos e cambia el componente este responde volviendo a renderizar solo la parte de codigo que afecta a ese estado</p>
          <br/>
          <strong>useContext: </strong>
          <p>Permite compartir informacion entre componentes de manera facil y sencilla, los componentes pueden acceder a datos o funciones desde un contexto compartido sin tener que psar props manualmente a través de varios nivelees de componentes</p>
          <br/>
          <strong>Ejemplo</strong>
          <br/>
          <p>const  usuario  = useContext(UserContext); // global</p>
          <p>const  usuario = useContext(UserContext); // global</p>
        </li>
        <li>
          <strong>¿Cuál es la estructura básica de un componente funcional?</strong>
          <br/>
          <code>{`const MiComponente = () => <div>Hola</div>`}</code>
        </li>
      </ol>
    </>
  );
};
