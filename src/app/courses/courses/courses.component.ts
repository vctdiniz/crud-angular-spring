import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    { _id: '1', name: 'Angular', category: 'Frontend' },
    { _id: '2', name: 'React', category: 'Frontend' },
    { _id: '3', name: 'VueJS', category: 'Frontend' },
    { _id: '4', name: 'Java', category: 'Backend' },
    { _id: '5', name: 'PHP', category: 'Backend' },
    { _id: '6', name: '.NET', category: 'Backend' },
    { _id: '7', name: 'Python', category: 'Backend' },
  ];
  displayedColumns = ['name', 'category'];

  constructor() { }

  ngOnInit(): void {
  }

}
