import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean; 
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  // students: Array<IStudent> = [];

  // constructor() {
  //   this.students[0] = {
  //     id: 1,
  //     firstName: 'Xay',
  //     lastName: 'Sal',
  //     course: 'Programming'
  //   }
  //   this.students[1] = {
  //     id: 1,
  //     firstName: 'Bill',
  //     lastName: 'Ko',
  //     course: 'Math'
  //   }
  //   this.students[2] = {
  //     id: 1,
  //     firstName: 'Jill',
  //     lastName: 'Reed',
  //     course: 'History'
  //   }
  //   this.students[3] = {
  //     id: 1,
  //     firstName: 'Phil',
  //     lastName: 'Dunphy',
  //     course: 'Business'
  //   }
  // }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Alex',
        lastName: 'Dunphy',
        course: 'Bio-Chem'
        editMode: false
      },
      {
        id: 2,
        firstName: 'Mitchel',
        lastName: 'Pritchet',
        course: 'Business-Law'
        editMode: false

      },
      {
        id: 3,
        firstName: 'Phil',
        lastName: 'Dunphy',
        course: 'Business'
        editMode: false

      }
    ];
  }

  addStudent() {
    this.studentArray.unshift({
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true
    });
    this.disableAddButton = true;
  }

  removeStudent(index: number){
    console.log('index---->', index);
    this.studentArray.splice(index, 1);
  }
  
  saveStudent(){
    this.studentArray[0].editMode = false;
    this.diableAddButton = false;
    this.sort('asc');
  }

  sort(direction : string){
    //const dir = direction ==='asc'?

    this.studentArray.sort((a:IStudent, b:IStudent)=> {
      //   if (a.id < b.id){
      //     return -1;
      //   }else{ 
      //     return 1;
      //   }
      //  }else{
      //     if (direction === 'asc'){
      //       return 1;

      //     }else{
      //       return -1;
      //     }
      //     return 1;
      //   }
      return a.id < b.id ? -1 : 1;
    });
  }
}
