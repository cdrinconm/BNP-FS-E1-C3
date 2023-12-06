import { Injectable } from '@angular/core';

@Injectable()
export class NuevoServicioService {
    private servicios: Array<String> = [];

    incluir(s:string){
        this.servicios.push(s);
    }

    obtener(){
        return this.servicios;
    }
}