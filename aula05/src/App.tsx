import Cabecalho from "./components/Cabecalho/Cabecalho";

function App(){

    const pagina:string = "Página Inicial";

    const nrPagina:string = "2";

    const status = "deployed"

    const aviso = ()=> alert(pagina)

  return(
    <>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso} />
    </>
  );
}

export default App;