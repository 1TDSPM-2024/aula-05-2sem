

export type CabecalhoProps = {
    paginaProps:string;
    nrPaginaProps:number | string;
    children:React.ReactNode;
}

export interface Cabecalho2Props  {
    statusProps:"loading" | "deployed";
    avisoProp:Function;
}
