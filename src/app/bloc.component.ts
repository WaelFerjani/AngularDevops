import { Component, OnInit } from '@angular/core';
import { BlocService } from './bloc.service';
import { Bloc } from './bloc.model';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
})
export class blocComponent implements OnInit {
  blocs: Bloc[] = [];

  constructor(private blocService: BlocService) { }

  ngOnInit(): void {
    this.fetchFoyers();
  }

  fetchFoyers(): void {
    this.blocService.getAllBlocs().subscribe(
      (data: Bloc[]) => {
        this.blocs = data;
      },
      error => {
        console.log('Error fetching foyers:', error);
      }
    );
  }
}
