import { Component, OnInit } from '@angular/core';
import { FoyerService } from './foyer.service';
import { Foyer } from './foyer.model';

@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
})
export class FoyerComponent implements OnInit {
  foyers: Foyer[] = [];

  constructor(private foyerService: FoyerService) { }

  ngOnInit(): void {
    this.fetchFoyers();
  }

  fetchFoyers(): void {
    this.foyerService.getAllFoyers().subscribe(
      (data: Foyer[]) => {
        this.foyers = data;
      },
      error => {
        console.log('Error fetching foyers:', error);
      }
    );
  }
}
