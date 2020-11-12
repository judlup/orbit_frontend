import { StudentService } from 'src/app/services/student/student.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-edit-stundent',
  templateUrl: './edit-stundent.component.html',
  styleUrls: ['./edit-stundent.component.scss']
})
export class EditStundentComponent implements OnInit {

  @Output() answer: EventEmitter<any> = new EventEmitter();
  @Input() reg:any;
  frm: FormGroup;
  res: any;

  constructor(
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    private studentService: StudentService,

  ) { }

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      username: [this.reg.username, Validators.compose([Validators.required])],
      firstname: [this.reg.firstName, Validators.compose([Validators.required])],
      lastname: [this.reg.lastName, Validators.compose([Validators.required])],
      age: [this.reg.age, Validators.compose([Validators.required])],
      career: [this.reg.career, Validators.compose([Validators.required])],
    });
  }

  edit(){
    let data = {
      FirstName : this.frm.value.firstname,
      LastName : this.frm.value.lastname,
      Age : this.frm.value.age,
      Career : this.frm.value.career
    }
    this.studentService.update(data).subscribe(
      response => {
        this.res = response;
        if (this.res == false) {
          this.generalService.ALERT("Failed try again, please.",'error');
        } else {
          this.generalService.ALERT("Student edited successfully.",'success');
          this.answer.emit("ok");
        }
      },
      error => {
        this.generalService.ALERT("Error, please contact with us.",'error');
        console.log(<any>error);
      }
    );
  }


}
