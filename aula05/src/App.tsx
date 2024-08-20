import Cabecalho from "./Cabecalho";

function App(){

    const pagina:string = "Pagina Principal";
    const nrPagina:number = 2;
    const status = "loading";
    const aviso = ()=> alert(pagina);

  return(
    <div>
      <h1>Componente App</h1>
      <Cabecalho paginaProps={pagina} nrPaginaProps={nrPagina} statusProps={status} avisoProps={aviso}>
        <ul>
          <li><a href="#">aluno-1</a></li>
          <li><a href="#">aluno-2</a></li>
          <li><a href="#">aluno-3</a></li>
          <li><a href="#">aluno-4</a></li>
          <li><a href="#">aluno-5</a></li>
          <li><a href="#">aluno-6</a></li>
          <li><a href="#">aluno-7</a></li>
          <li><a href="#">aluno-8</a></li>
          <li><a href="#">aluno-9</a></li>
          <li><a href="#">aluno-10</a></li>
        </ul>
      </Cabecalho>
    </div>
  );
}

export default App;