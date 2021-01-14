import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseServices } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
 
    course: Course;

    constructor(private activatedRoute: ActivatedRoute,  private courseServices: CourseServices) { }
    
    ngOnInit(): void {
     this.course = this.courseServices.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
    }

    save(): void {
        this.courseServices.save(this.course);
    }
  
}