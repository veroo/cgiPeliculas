import { Component, OnInit } from "@angular/core";
import { MoviesService } from "./services/movies.service";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  searchForm: FormGroup;
  movieData: any;
  details: boolean = false;
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
}
