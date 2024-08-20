/* eslint-disable @typescript-eslint/no-unsafe-function-type */

export type Cabecalho1Props = {
    paginaProps:string;
    nrPaginaProps:string | number;
    children:React.ReactNode;
}

export type Cabecalho2Props = {
    statusProps:"deployed" | "loading";
    avisoProps:Function;
}
