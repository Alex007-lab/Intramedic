import { Medic, User } from "./User";


export class Recetas {
  constructor(
    public paciente:User,
    public Doctor:Medic,
    public Hora: string,
    public Dia: number,
    public mes: string,
    public año: number,
    public estudio:string,
    public doctor:string
  ) {}
}
