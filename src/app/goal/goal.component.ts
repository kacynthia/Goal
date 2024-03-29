import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2008,5,30)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2006,8,28)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,9,10)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2000,7,28)),
    new Goal(5,'Solve math homework','Damn Math',new Date(2001,8,17)),
    new Goal(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2010,10,1)),
  ];
 

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if(isComplete){
      let toDelete= confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      if(toDelete){
        this.goals.splice(index,1);

      }
     
    }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id=goalLength+1;
    goal.completeDate= new Date(goal.completeDate)
    this.goals.push(goal)
  }

  constructor() { }

  ngOnInit() {
  }

}
