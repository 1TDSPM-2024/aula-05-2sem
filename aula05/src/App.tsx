import Cabecalho from "./components/Cabecalho/Cabecalho";


function App(){

    const pagina: string = "Página inicial...";
    const nrPagina:number = 2;

    const status = "deployed";
    const aviso = ()=> alert(pagina);

  return(
    <div>
      <h1>Componete App</h1>
      {/* Area de props */}
      <Cabecalho statusProps = {status} paginaProps={pagina}  nrPaginaProps={nrPagina} avisoProps = {aviso}>
        <ul>
          <li><a href="#"></a>Aluno-1</li>
          <li><a href="#"></a>Aluno-2</li>
          <li><a href="#"></a>Aluno-3</li>
          <li><a href="#"></a>Aluno-4</li>
          <li><a href="#"></a>Aluno-5</li>
          <li><a href="#"></a>Aluno-6</li>
          <li><a href="#"></a>Aluno-7</li>
          <li><a href="#"></a>Aluno-8</li>
          <li><a href="#"></a>Aluno-9</li>
          <li><a href="#"></a>Aluno-10</li>
        </ul>
      </Cabecalho>
    </div>
  )
}

export default App