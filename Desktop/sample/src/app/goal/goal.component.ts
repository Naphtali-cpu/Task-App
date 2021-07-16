import { Component, OnInit } from '@angular/core';
import { Goal } from "../goal";

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {
  
  goals:Goal[] = [
     new Goal(1, 'Watch finding Nemo', 'Find a way to watch it', new Date(2019,6,9)),
     new Goal(2, 'Code', 'Find a way to watch it', new Date(2020,6,7)),
     new Goal(3, 'Do other things', 'Find a way to', new Date(2021,7,9)),
     new Goal(4, 'Cycle', 'Redo what i have been doing', new Date(2017,6,9)),
     new Goal(5, 'Continue', 'Continue with it still', new Date(2022,1,9)),
     new Goal(6, 'Etc', 'Get to know later', new Date(2030,6,9))
  ];

  addNewGoal(goal:any){
    console.log(goal)
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index:any){
    this.goals[index].showInfo = !this.goals[index].showInfo;
  }

  completeGoal(isComplete:any, index:any){
    if (isComplete) {
      this.goals.splice(index,1)
    }
  }

  deleteGoal(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  } 

  displayInfo(index:any){
    this.goals[index].showInfo = !this.goals[index].showInfo;
  }

  constructor() { }
  ngOnInit(): void {

  }
  
}
