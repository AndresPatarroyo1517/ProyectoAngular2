import { Component } from '@angular/core';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animal',
  standalone: false,
  templateUrl: './animal.component.html',
  styleUrl: './animal.component.css'
})
export class AnimalComponent {
  animalList: any = [];
  animalForm: any = this.formBuilder.group({
    nombre: '',
    edad: 0, 
    tipo: '',
    fecha: Date
  })
  ediatbleAnimal: boolean = false;
  idAnimal: any;
  constructor(private animalService: AnimalService) {

  }

  getAllAnimals() {
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }

  ngOnInit() {
    this.getAllAnimals();
   }
}

