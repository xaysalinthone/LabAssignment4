import { Component, OnInit } from '@angular/core';

interface IStudent {
  id?: number;
  firstName: string;
  lastName: string;
  course: string;
}

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Xay',
      lastName: 'Sal',
      course: 'Programming'
    }
    this.students[1] = {
      id: 1,
      firstName: 'Bill',
      lastName: 'Ko',
      course: 'Math'
    }
    this.students[2] = {
      id: 1,
      firstName: 'Jill',
      lastName: 'Reed',
      course: 'History'
    }
    this.students[3] = {
      id: 1,
      firstName: 'Phil',
      lastName: 'Dunphy',
      course: 'Business'
    }
  }

  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Alex',
      lastName: 'Dunphy',
      course: 'Bio-Chem'
    };

    this.students.push(student);
  }

}
