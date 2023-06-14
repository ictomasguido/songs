import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';
import { SongsComponent } from './songs.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SongsDetailsComponent } from '../songs-details/songs-details.component';
import { ClientService } from 'src/app/services/client.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [SongsComponent, SongsDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    SongsRoutingModule,

  ],
  providers: [ClientService, HttpClient],
  bootstrap: [SongsComponent],
})
export class SongsModule { }
