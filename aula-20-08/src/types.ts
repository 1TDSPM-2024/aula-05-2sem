
export type Cabecalho1Props={
    paginaProps: string; 
    nrPaginaProps: number | string;
    children: React.ReactNode; /*props children*/
}


export type Cabecalho2Props={
    statusProps:"loading" | "deployed";
    avisoProps: Function;
}