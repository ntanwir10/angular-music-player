import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artistId: string;
  artist: any = {};
  preloading: boolean = true;
  topTracks: any[] = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {
    this._activatedRoute.params.subscribe(params => {
      this.artistId = params['id'];
    });
  }

  ngOnInit() {
    this.getArtist();
    this.getTopTracks();
  }

  getArtist() {
    this._spotifyService.getArtistById(this.artistId).subscribe((data: any) => {
      this.artist = data;
      console.log(data);
      this.preloading = false;
    });
  }

  getTopTracks() {
    this._spotifyService.getTopTracks(this.artistId).subscribe((data: any) => {
      // this.artist=data;
      console.log(data);
      this.topTracks = data;
    });
  }
}
