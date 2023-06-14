import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsDetailsComponent } from '../songs-details/songs-details.component';
import { SongsComponent } from './songs.component';

const routes: Routes = [
  {
    path: '',
    component: SongsComponent
  },
  {
    path: ':id',
    component: SongsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
