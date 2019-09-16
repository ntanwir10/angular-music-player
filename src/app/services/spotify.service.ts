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
      'Bearer BQBxWuqjZ6v9DkMqUvqBjhNEJclS7rXphp0FnXv8p-9rivGOJJcJxDaBf0APHMrhdj-E0cdnYlY86m-D86CWmkRz1mAz0x2ik6P9h3fdu4kyPdXoBeE5XIlmBzfD4_D7NFneZREX4Aax0-Hhr9hj9D9DjtwEkcZEwWc011uWJB7R2robWzKnw2p_xrfR3HJqv_7qwxaqevjqyQVvEdWg3X-ReU1zH3xpbjeDrlYVYXUtAgFAEdMaWJhgwfAZiJkk9Buu9Fu8hg'
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
