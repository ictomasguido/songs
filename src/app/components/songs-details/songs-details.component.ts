import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs-details',
  templateUrl: './songs-details.component.html',
  styleUrls: ['./songs-details.component.scss'],
})
export class SongsDetailsComponent implements OnInit {

  @Input()
  public html: string = ``
  public title: string = ``
  public fontSizeVariable = 16

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap
      .subscribe((params) => {
        this.html = params.get('html')
        this.title = params.get('title')
      }
      );
  }

  more(){
    this.fontSizeVariable++
  }

  sub(){
    this.fontSizeVariable--
  }
}
