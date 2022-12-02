import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.css']
})
export class StudentsPageComponent implements OnInit {

  loading = true;

  students: Student[] = [
    new Student(1, 'Thomas', 'Lopez', new Date('2001-10-21'), true),
    new Student(2, 'Ramiro', 'Biagetti', new Date('2002-03-29'), false),
    new Student(3, 'Lucas', 'Castro', new Date('1995-07-15'), true),
    new Student(4, 'Emiliano', 'Mendez', new Date('2000-03-25'), true),
    new Student(5, 'Ignacio', 'Suarez', new Date('1998-01-2'), false),
    new Student(3, 'Jonathan', 'Torres', new Date('1999-09-10'), true),
  ]

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1500);
  }
}
