import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(title: string, type: string, year: number) {
    return this.http.get(
      `http://www.omdbapi.com/?apikey=f12ba140&t=${title}&type=${type}&y=${year}`
    );
  }
}
