import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.scss']
})
export class FifthSectionComponent {
formData!:FormGroup
constructor(
  private fb: FormBuilder
  
){}
ngOnInit() {
  this.initForm();
}

initForm() {
  this.formData = this.fb.group({
    fname: null,
    lname: null,
    email: null,
    phone: null,
    password: null,
   
  });
}
onSubmit() {
  console.log('formData:', this.formData.value);
}
}
