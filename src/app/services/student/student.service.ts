import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GeneralService } from '../general/general.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url : any = GeneralService.WS_URL + "students";

  constructor(
    private http : HttpClient,
    private generalService: GeneralService,
  ) { }

  list(): any
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.get(this.url, {headers : headers});
  }

  get(id): any
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.get(this.url+'/students/GetStudent?id='+id, {headers : headers});
  }

  create(data): any
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    let params = data;
    return this.http.post(this.url, params, {headers : headers});
  }

  update(data): any
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    let params = data;
    return this.http.post(this.url, params, {headers : headers});
  }

  delete(id): any
  {
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    return this.http.delete(this.url+'students?id='+id, {headers : headers});
  }

}
