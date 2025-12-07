import { useState } from "react";

function App() {
  const [numero1, setnumero1] = useState(0.0);
  const [numero2, setnumero2] = useState(0.0);
  const [numero3, setnumero3] = useState(0.0);
  const [numero4, setnumero4] = useState(0.0);

  const notas = [0.20, 0.20, 0.20, 0.40];

  function promedio() {
    const numeros = [numero1, numero2, numero3, numero4];
    let resultado = 0;
    for (let i = 0; i < notas.length; i++) {
      resultado += numeros[i] * notas[i];
    }
    return resultado.toFixed(2); // opcional, limita a 2 decimales
  }

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Corteum</h1>
        <p className="result-content">{promedio()}</p>
        <div className="data-cut">
          <input 
            type="text" 
            className="cut-content"
            onChange={(e) => setnumero1(Number(e.target.value))}
          />
          <input 
            type="text" 
            className="cut-content"
            onChange={(e) => setnumero2(Number(e.target.value))}
          />
          <input 
            type="text" 
            className="cut-content"
            onChange={(e) => setnumero3(Number(e.target.value))}
          />
          <input 
            type="text" 
            className="cut-content"
            onChange={(e) => setnumero4(Number(e.target.value))}
          />
        </div>
      </div>
      <div className="info-content">
        <p className="p-info">
          Cada cuadrícula está configurada con el porcentaje correspondiente 
          a cada corte, lo que hace más fácil realizar los cálculos.
        </p>
      </div>
    </div>
  )
}

export default App;
