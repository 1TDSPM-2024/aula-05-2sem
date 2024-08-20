

export type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:number | string;
    children:React.ReactNode;
}

export type Cabecalho2Props = {
    statusProps:"loading" | "deployed";
    avisoProp:Function;
}
