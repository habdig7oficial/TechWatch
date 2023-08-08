import { Int, IntRange } from "./auxiliar"

export interface aplicativo {
  nome: string,
  nota: IntRange<0, 10>,
  numero_usuario: Int,
}

export interface tecnologia{
  nome: string,
  apps: Array<aplicativo>,
  descricao: string,
}

