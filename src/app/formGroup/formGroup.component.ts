import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/User';

@Component({
  selector: 'app-formGroup',
  templateUrl: './formGroup.component.html',
  styleUrls: ['./formGroup.component.css']
})
export class FormGroupComponent implements OnInit {

  userForm = this.formBuilder.group(
    {
      credentials: this.formBuilder.group({
        email: [''],
        password: ['']
      }),
    }
  )

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit(): void{
    console.log(this.userForm.value)
  }

}
