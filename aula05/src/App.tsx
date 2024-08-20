import Cabecalho from "./Cabecalho";

function App(){

  const titulo:string = "Pagina inicial";

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo}/>
    </div>
  );
}

export default App;