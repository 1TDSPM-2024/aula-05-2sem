import Cabecalho from "./components/Cabecalho/Cabecalho";

function App(){

    const titulo:string = "Página ...";

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} />
    </div>
  );
}

export default App;