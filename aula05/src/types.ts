export type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:number | string;
    children:React.ReactNode;
}

// export type Cabecalho2Props = {
//     statusProps:"loading" | "deployer";
//     avisoProps:Function;
// }

export interface Cabecalho2Props {
    statusProps:"loading" | "deployer";
    avisoProps:Function;
}