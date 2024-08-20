import Cabecalho from "./Cabecalho";

function App(){

    const pagina:string = "Pagina Principal";
    const nrPagina:number = 2;
    const status = "loading";
    const aviso = ()=>alert(pagina);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}/>
    </div>
  );
}

export default App;