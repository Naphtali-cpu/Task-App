import { Component } from '@angular/core';
import { Goal } from "./goal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
   goals:Goal[] = [
     new Goal(1, 'Watch finding Nemo', 'Find a way to watch it', new Date(2019,6,9)),
     new Goal(2, 'Code', 'Find a way to watch it', new Date(2020,6,7)),
     new Goal(3, 'Do other things', 'Find a way to', new Date(2021,7,9)),
     new Goal(4, 'Cycle', 'Redo what i have been doing', new Date(2017,6,9)),
     new Goal(5, 'Continue', 'Continue with it still', new Date(2022,1,9)),
     new Goal(6, 'Etc', 'Get to know later', new Date(2030,6,9))
  ];

  constructor(){
    
  }
}  

