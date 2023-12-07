import { Injectable } from '@angular/core';
import { getJSON, request } from '@nativescript/core/http';

@Injectable()
export class NoticiasService {
    api: string = "http://localhost:3000";

    agregar(s:string){
        return request({
            url: this.api + "/favs",
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            content : JSON.stringify({
                nuevo:s
            })
        });
    }

    favs() {
        return getJSON(this.api + "/favs");
    }

    buscar (s: string) {
        return getJSON(this.api + "/get?q="+s)
    }
}