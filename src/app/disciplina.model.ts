import {Professor} from "./professor.model"
export class Disciplina {
  codigo: number;
  nome: string;
  descricao: string;
  prof: Professor;
  
  constructor(codigo: number, nome: string, descricao?: string, prof?:Professor) {
    this.codigo = codigo;
    this.nome = nome;
    this.descricao = descricao;
    this.prof = prof;
    
  }
}
