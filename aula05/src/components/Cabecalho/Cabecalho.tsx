import { Cabecalho1Props } from "../../types";
import { Cabecalho2Props } from "../../types";


function Cabecalho({paginaProps, nrPaginaProps, children, statusProps, avisoProps}:Cabecalho1Props & Cabecalho2Props) {

    document.title = statusProps+" - "+nrPaginaProps;
    document.title = paginaProps;

    return (
      <div>
        <h1>{paginaProps+"\n- "+nrPaginaProps}</h1>
        <button onClick={()=>avisoProps()}>Aviso</button>
        <div>
            {children}
        </div>
      </div>
    );
}
  
export default Cabecalho;
