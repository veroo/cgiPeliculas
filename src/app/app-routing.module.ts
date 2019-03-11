import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { MoviesComponent } from "./components/movies/movies.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "movies", component: MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
