export class ConcursoStatusModel{
    id: number;
    titulo: string;
    status: number;
    status_descricao: string;
    data_inicio: Date;
    data_fim: Date;

    constructor (id: number, titulo: string, status: number, 
                 status_descricao: string, data_inicio: Date, data_fim: Date){
        this.id = id;
        this.titulo = titulo;
        this.status = status;
        this.status_descricao = status_descricao;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;        
    }
}