import { Component, OnInit } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  yt_iframe_html: any;
 ytLink= "https://youtu.be/8oY5naf226k"

  constructor( private embedService: EmbedVideoService) { 
    this.yt_iframe_html = this.embedService.embed(this.ytLink, {
      // query: { portrait: 0, color: '333' },
      attr: { width: '100%', height:'100%'}
    });
    // this.yt_iframe_html = this.embedService.embed(this.ytLink, {
    //   attr: max-width: 920
    // });
  }

  ngOnInit() {
  }
}
