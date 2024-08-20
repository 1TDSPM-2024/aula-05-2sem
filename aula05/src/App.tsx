import Cabecalho from "./components/Cabecalho/Cabecalho";


function App(){

    const titulo: string = "Página inicial...";

    
    const aviso = ()=> alert(titulo);

  return(
    <div>
      <h1>Componete App</h1>
      {/* Area de props */}
      <Cabecalho tituloProps = {titulo} avisoProps = {aviso} />
    </div>
  )
}

export default App