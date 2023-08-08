
export interface aplicativo {
  nome: string,
  nota: 1 | 2 | 3 
}

export interface tecnologia{
  nome: string,
  apps: Array<aplicativo>
}
