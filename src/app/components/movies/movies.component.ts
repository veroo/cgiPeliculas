import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MoviesService } from "src/app/services/movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
  searchForm: FormGroup;
  movieData: any;
  details: boolean = false;
  favMovies: any;

  constructor(
    private serviceMovies: MoviesService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      title: [""],
      type: [""],
      year: [""]
    });
    this.getFavMovies(null);
  }
  onSearch() {
    const formValues: { title: string; type: string; year: number } = this
      .searchForm.value;
    this.serviceMovies
      .getMovies(formValues.title, formValues.type, formValues.year)
      .subscribe(response => {
        console.log(response);
        if (response.hasOwnProperty("Error")) {
          this.movieData = false;
        } else {
          this.movieData = response;
        }
      });
    this.details = false;
  }
  onDetail() {
    this.details = true;
  }

  onLike(movieData: any) {
    console.log(movieData);

    const moviesFav = JSON.parse(localStorage.getItem("fav") || "[]");
    moviesFav.push(movieData);

    // Saving
    localStorage.setItem("fav", JSON.stringify(moviesFav));
  }

  getFavMovies($event) {
    console.log($event);
    this.favMovies = JSON.parse(localStorage.getItem("fav") || "[]");
  }
}
