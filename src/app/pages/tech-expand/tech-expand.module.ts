import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TechExpandPageRoutingModule } from './tech-expand-routing.module';

import { TechExpandPage } from './tech-expand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TechExpandPageRoutingModule
  ],
  declarations: [TechExpandPage]
})
export class TechExpandPageModule {}
