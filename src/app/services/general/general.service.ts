import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import Swal from 'sweetalert2'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor() { }

  static WS_URL: string =  "https://localhost:44328/api/";

  ALERT(mensaje, tipo){
    Swal.fire({
      icon: tipo,
      title: mensaje,
      showConfirmButton: false,
      timer: 2000
    })
  }

  PROMPT(titulo){
    const observable = new Observable(observer => {
      Swal.fire({
        title:titulo,
        input: 'text',
        showCancelButton: false,
        confirmButtonText: 'Enviar',
        confirmButtonColor: '#3F51B5',
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.value) {
          observer.next(result.value);
        }
      })
    });
    return observable;
  }

  CONFIRM(){
    const observable = new Observable(observer => {
      Swal.fire({
        title: 'Estás seguro?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
      }).then((result) => {
        if (result.value) {
          observer.next(result.value);
        }
      });
    });
    return observable;
  }

}