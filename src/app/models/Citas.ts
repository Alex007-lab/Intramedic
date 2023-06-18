import { User } from "./User";

export class citasLab {
  constructor(
    public paciente:User,
    public Hora: string,
    public Dia: number,
    public mes: string,
    public año: number,
    public estudio:string,
    public doctor:string
  ) {}
}

export class citasMGral {
  constructor(
    public paciente:User,
    public Hora: string,
    public Dia: number,
    public mes: string,
    public año: number,
    public Comentario:string,
    public doctor:string
  ) {}
}


export class citasEspecial {
  constructor(
    public paciente:User,
    public Hora: string,
    public Dia: number,
    public mes: string,
    public año: number,
    public Area:string,
    public doctor:string
  ) {}
}


