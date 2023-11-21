import { Component, OnInit } from '@angular/core';

import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  // searchForm : FormGroup;
  constructor(
    private service: MovieApiServiceService,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {}

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });
  submitForm() {
    console.log(this.searchForm.value, 'searchform#');
    this.service.getsearchMovie(this.searchForm.value).subscribe((result) => {
      console.log(result, 'searchmovie#');
      this.searchResult = result.results;
    });
  }
}
