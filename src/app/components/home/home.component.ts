import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newReleases: any[] = [];
  preloading: boolean = true;
  message: string;
  error: boolean = false;

  constructor(private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newReleases = data;
        this.preloading = false;
      },
      error => {
        this.preloading = false;
        this.error = true;
        this.message = error.error.error.message;
        console.log(error.error.error.message);
      }
    );
  }

  ngOnInit() {}
}
