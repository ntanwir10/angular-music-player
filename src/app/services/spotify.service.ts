import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  private url: string = 'https://api.spotify.com/v1/';

  private headers: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer BQCUaCDF-fBa75WpXcEbJ-17C_U5C5NC2eSkEoqFLftArST4Dx5D7v0BfCs5YGyowNf00RoDI1twLwVuWGVOA_l1nY8qQt07PVwrkaKFq-S3S3UxYOjOKDhPumP8E90nb9nKA4m_HYYoP7RyM13Z8ncxTaYj9daOYb-etCknVavvTmTYZUWst4qlmJ6OcOnsgIYTFACtEU7XfRP1D_4cYZw24dSljBPimsngkj-L7iJ1X2RzioerzSgCRwg-ptay5SFMTnghUg'
  });

  getNewReleases() {
    return this._http
      .get(this.url + `browse/new-releases`, { headers: this.headers })
      .pipe(map(data => data['albums'].items));
  }

  getArtist(txt: string) {
    return this._http
      .get(
        this.url + `search?q=${txt}&type=artist&market=SV&offset=0&limit=20`,
        { headers: this.headers }
      )
      .pipe(map(data => data['artists'].items));
  }

  getArtistById(id: string) {
    return this._http.get(this.url + `artists/${id}`, {
      headers: this.headers
    });
  }

  getTopTracks(id: string) {
    return this._http
      .get(this.url + `artists/${id}/top-tracks?country=us`, {
        headers: this.headers
      })
      .pipe(map(data => data['tracks']));
  }
}
