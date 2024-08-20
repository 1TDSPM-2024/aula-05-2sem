type CabecalhoProps = {
    paginaProps: string;
    nrPaginaProps:number | string;
    statusProps:"loading" | "deployed";
    avisoProps:Function;
}

function Cabecalho({paginaProps,avisoProps,statusProps,nrPaginaProps}:CabecalhoProps) {

    // if(typeof nrPaginaProps === "number"){
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }else{
    //     nrPaginaProps= "..??..";
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }
    
    document.title = statusProps+" - "+nrPaginaProps;
    document.addEventListener("click",() => {})

    return(
        <header>
            <h1>{paginaProps+"\n-"+nrPaginaProps}</h1>
            <button onClick = {()=>avisoProps()}>Aviso</button>
        </header>
    );
}

export default Cabecalho;