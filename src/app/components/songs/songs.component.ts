import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Song } from './structs/interface';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss'],
})
export class SongsComponent implements OnInit {

  public songs: Song[] = []

  public dataSong = this.songs
  public html = ''
  private service: FirestoreService
  private keySongStorage = 'songs'

  constructor(
    private router: Router,
    private clientService: ClientService,
    private firestoreService: FirestoreService,
  ) {
    this.service = this.firestoreService

    let songs = localStorage.getItem(this.keySongStorage)
    if (!songs) {
      this.getSongs()
    } else {
      this.songs = this.dataSong = JSON.parse(songs)
    }
    console.log(JSON.parse(songs))
  }

  handleRefresh(event) {
    this.service.getSongs().valueChanges().subscribe((data) => {
      if(data.length){
        this.songs = this.dataSong = data
        localStorage.setItem(this.keySongStorage, JSON.stringify(data))
      }
      event.target.complete();
    }, (err) => {
      event.target.complete();
      console.log(err)
    })
  }

  getSongs() {
    this.service.getSongs().valueChanges().subscribe((data) => {
      this.songs = this.dataSong = data
      localStorage.setItem(this.keySongStorage, JSON.stringify(data))
    })
  }

  ngOnInit() { }

  goToSongDetail(song: Song) {
    this.router.navigate(['/songs/' + song.id], { queryParams: { title: song.title, html: song.body } })
  }

  filter(event) {
    this.songs = this.dataSong.filter(song => song.body?.toLowerCase().includes(event.target.value?.toLowerCase()) || song.title?.toLowerCase().includes(event.target.value?.toLowerCase()))
  }

} 
