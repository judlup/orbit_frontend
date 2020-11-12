import { EditStundentComponent } from './../edit-stundent/edit-stundent.component';
import { GeneralService } from './../../services/general/general.service';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddStundentComponent } from '../add-stundent/add-stundent.component';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { StudentComponent } from '../student/student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students:any;
  search: string = '';
  faMedium=faMedium
  constructor(
    private generalService : GeneralService,
    private studentService : StudentService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.studentService.list().subscribe((res)=>{
      this.students = res['result'];
    })
  }

  open(option, reg = null) {
    let modalRef;
    if(option == "add"){
      modalRef = this.modalService.open(AddStundentComponent);
    }else if(option == "edit"){
      modalRef = this.modalService.open(EditStundentComponent);
    }else if(option == "see"){
      modalRef = this.modalService.open(StudentComponent);
    }
    if(reg != null){
      modalRef.componentInstance.reg = reg;
    }
    modalRef.componentInstance.answer.subscribe((anwser) => {
      if(anwser == 'ok'){
        this.list();
        modalRef.close();
      }
    })
  }

  delete(id){
    this.generalService.CONFIRM().subscribe((response)=>{
      if(response == true){
        this.studentService.delete(id).subscribe(
          (response) => {
            this.generalService.ALERT("Student deleted successfully.",'success');
            this.list();
          },
          error => {
            this.generalService.ALERT("Error, please contact with us.","error");
          }
        );
      }
    });
  }



}
