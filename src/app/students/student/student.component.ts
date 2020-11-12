import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  @Output() answer: EventEmitter<any> = new EventEmitter();
  @Input() reg:any;

  constructor() { }

  ngOnInit(): void {
  }

}
