import Cabecalho from "./Cabecalho";

function App(){

  const titulo:string = "Pagina ....";

  const aviso = ()=>alert(titulo);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho tituloProps={titulo} avisoProps={aviso}/>
    </div>
  );
}

export default App;