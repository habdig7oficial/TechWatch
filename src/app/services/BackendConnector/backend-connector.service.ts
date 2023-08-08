import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  url: string = "http://localhost:3000/tecnologias"

  constructor(public httpClient: HttpClient) { }

  async connect(){
    return this.httpClient.request("GET", this.url, {responseType:"json"});
  }
}
