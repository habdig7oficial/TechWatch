import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tecnologia } from 'src/app/interfaces/tecnologia';
@Injectable({
  providedIn: 'root'
})
export class BackendConnectorService {

  url: string = "http://localhost:3000/tecnologias"

  constructor(public httpClient: HttpClient) { }

  async connect(){
    return this.httpClient.request<tecnologia>("GET", this.url, {responseType:"json"});
  }
}
