/* src/app/pages/home/home.page.ts */

import { Component, OnInit } from '@angular/core';
import { BackendConnectorService } from '../../services/BackendConnector/backend-connector.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tecnologias: Array<any> = []
  navExtra: NavigationExtras = {
    state: {
      teste: "ok"
    }
  }

  constructor(private back: BackendConnectorService, public router: Router) {}

  async ngOnInit(){
    let req = await this.back.connect()

    req.subscribe((res: any) => {
      this.tecnologias = res
      console.log(res)
    })
  }

  send(){
    this.router.navigate(["/tech-expand"], this.navExtra)
  }
}
