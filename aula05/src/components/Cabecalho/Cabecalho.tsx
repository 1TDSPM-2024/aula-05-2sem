import { Cabecalho1Props,CabecalhoProps2 } from "../../types";

function Cabecalho({paginaProps,avisoProps,statusProps,nrPaginaProps,children}:Cabecalho1Props & CabecalhoProps2) {

    // if(typeof nrPaginaProps === "number"){
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }else{
    //     nrPaginaProps= "..??..";
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }
    
    document.title = statusProps+" - "+nrPaginaProps;

    return(
        <header>
            <h1>{paginaProps+"\n-"+nrPaginaProps}</h1>
            <button onClick = {()=>avisoProps()}>Aviso</button>
            <div>
                {children}
            </div>
        </header>
    );
}

export default Cabecalho;