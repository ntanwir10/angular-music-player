import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private _http: HttpClient) {}

  private url = 'https://api.spotify.com/v1/';

  private headers: HttpHeaders = new HttpHeaders({
    Authorization:
      'Bearer BQANO4-Xlo09LmSFbAeXWLKoOrDXEhwLrQEoI8CnJqZ-Mq4Xu9klubbg4zLRbm40zcDcfAKjxJOFZXMFn-gA17tB3W62TwRH97er372smpah7QF3DtKEad3cbLVtfedsW6GKz-j9s_fDPtKmpaK5MRaVjJh59bwvasSBTHQUb9kDH_x1zQKhSzFWkuGXjhU96zkKUhXOOExWN5qDE0UOE_Ur1u0hK9_WB-zwI5OdfNQlLqr9igZff2yDnBpN2gR6SIXyrwSenQ'
  });

  getNewReleases() {
    return this._http
      .get(this.url + `browse/new-releases?country=US&offset=50`, { headers: this.headers })
      .pipe(map(data => data['albums'].items));
  }

  getArtist(txt: string) {
    return this._http
      .get(
        this.url + `search?q=${txt}&type=artist&market=US&offset=10&limit=`,
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
