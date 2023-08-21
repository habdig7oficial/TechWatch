/* src/app/pages/tech-expand/tech-expand.page.ts */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { tecnologia } from 'src/app/interfaces/tecnologia';

@Component({
  selector: 'app-tech-expand',
  templateUrl: './tech-expand.page.html',
  styleUrls: ['./tech-expand.page.scss'],
})
export class TechExpandPage implements OnInit {

  ngOnInit(){
    console.log(this.params)
  }

  constructor(public router: Router,) { }

  params = this.router.getCurrentNavigation()?.extras.state as tecnologia

}
