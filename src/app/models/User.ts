export class User {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public lastNameM: string,
    public email: string,
    public password: string
  ) {}
}

export class Admin {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public lastNameM: string,
    public email: string,
    public password: string,
    public Rol: string,
    public AreaODepartamento: string
  ) {}
}

export class Medic {
  constructor(
    public id: number,
    public name: string,
    public lastName: string,
    public lastNameM: string,
    public email: string,
    public password: string,
    public especialidad: string,
    public cargo: string,
    public numeroDeColegiado: number,
    public horario: string,
    public telefono: number
  ) {}
}


export class recetas {
  constructor(
    public paciente: Expediente,
    public nombreMedicamento: string,
    public docis: string,
    public viaAdministracion: string,
    public frecuenciaYhorario: string,
    public duracionTratamiento: string
  ) {}
}

export class Expediente {
  constructor(
    public nombrePaciente:string,
    public edadPaciente:string,
    public historialMedico:string
  ){}
}
