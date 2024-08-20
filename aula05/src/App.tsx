import Cabecalho from "./components/Cabecalho/Cabecalho";


function App(){

    const titulo: string = "Página inicial";

  return(
    <div>
      <h1>Componete App</h1>
      {/* Area de props */}
      <Cabecalho tituloProps = {titulo} />
    </div>
  )
}

export default App