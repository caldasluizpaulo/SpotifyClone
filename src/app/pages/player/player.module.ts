import { PlayerRotas } from './player.routes';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';



@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
