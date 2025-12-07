
function App() {


  return (

    <div className="hero">
      <div className="hero-content">
          <h1>Corteum</h1>
          <p className="result-content" >0.0</p>
          <div className="data-cut">
            <input type="text" className="cut-content"/>
            <input type="text" className="cut-content"/>
            <input type="text" className="cut-content"/>
            <input type="text" className="cut-content"/>
          </div>
      </div>
      <div className="info-content ">
        <p className="p-info">
          Cada cuadrícula está configurada con el porcentaje correspondiente a cada corte, lo que hace más fácil realizar los cálculos.
        </p>
      </div>
        
    </div>
  )
}

export default App
