type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:number | string;
}

type Cabecalho2Props = {
    statusProps:"loading" | "deployed";
    avisoProps:Function;
}



function Cabecalho({paginaProps,nrPaginaProps,statusProps,avisoProps}:Cabecalho1Props & Cabecalho2Props) {

    // if(typeof nrPaginaProps === "number"){
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }else{
    //     nrPaginaProps = "..??..";
    //     document.title = statusProps+" - "+nrPaginaProps;
    // }

    document.title = statusProps+" - "+nrPaginaProps;
    document.addEventListener("click",()=>{})

    return(
        <header>
            <h1>{paginaProps+"\n- "+nrPaginaProps}</h1>
            <button onClick={()=> avisoProps()}>Aviso</button>
        </header>
    );
}

export default Cabecalho;