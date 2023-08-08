import { Component, OnInit } from '@angular/core';
import { BackendConnectorService } from '../services/BackendConnector/backend-connector.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tecnologias: Array<any> = []

  constructor(private back: BackendConnectorService) {}

  async ngOnInit(){
    let req = await this.back.connect()

    req.subscribe((res: any) => {
      this.tecnologias = res
      console.log(res)
    })
  }
}
