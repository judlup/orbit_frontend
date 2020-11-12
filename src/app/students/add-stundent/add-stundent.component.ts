import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general/general.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-add-stundent',
  templateUrl: './add-stundent.component.html',
  styleUrls: ['./add-stundent.component.scss']
})
export class AddStundentComponent implements OnInit {

  @Output() answer: EventEmitter<any> = new EventEmitter();

  frm: FormGroup;
  data: any;

  constructor(
    private generalService: GeneralService,
    private formBuilder: FormBuilder,
    private studentService: StudentService,

  ) { }

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      age: ['', Validators.compose([Validators.required])],
      career: ['', Validators.compose([Validators.required])],
    });
  }

  add(){
    let data = {
      Username : this.frm.value.username,
      FirstName : this.frm.value.firstname,
      LastName : this.frm.value.lastname,
      Age : this.frm.value.age,
      Career : this.frm.value.career
    }
    console.log(data);
    this.studentService.create(data).subscribe(
      response => {
        this.data = response;
        if (this.data == false) {
          this.generalService.ALERT("Failed try again, please.",'error');
        } else {
          this.generalService.ALERT("Student created successfully.",'success');
          this.answer.emit("ok");
        }
      },
      error => {
        this.generalService.ALERT("Verifica la información ingresada, los datos son incorrectos.",'error');
        console.log(<any>error);
      }
    );
  }



}
