import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from './../model/course';
import { Observable } from 'rxjs';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '/assets/courses.json';

  constructor(private httpClient: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        delay(2000),
        tap(courses => console.log(courses))
      );
  }
}
