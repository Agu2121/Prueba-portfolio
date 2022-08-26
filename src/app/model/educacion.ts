export class Educacion {
    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaInicioE: number;
    fechaFinE: number;
    imgE: string;

    constructor(nombreE: string, descripcionE: string, fechaInicioE: number, fechaFinE: number, imgE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
        this.imgE = imgE;
    }
}
