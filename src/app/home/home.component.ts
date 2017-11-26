import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../models/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent{

  constructor(private formPoster: FormPoster){

  }

  submitForm(form: NgForm){
    this.validatePrimaryLanguage(this.model.primaryLanguage);
      if(this.hasPrimaryLanguageError)
      return;

    this.formPoster.postEmployeeForm(this.model)
    .subscribe(
      data => console.log('success: ', data),
      err => console.log('error: ', err)
    )
  }

  languages = ["English", "Spanish", "Other"];
  hasPrimaryLanguageError: boolean = false;

  model = new Employee('', '', false, '', 'default');

  validatePrimaryLanguage(value){
    if(value === 'default'){
      this.hasPrimaryLanguageError = true;
    }else{
      this.hasPrimaryLanguageError = false;
    }
  }







//Method to make the first character of a string Capital...............
  // firstNameToUpperCase(value: string){
  //   if(value.length > 0){
  //     this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
  //   } else{
  //     this.model.firstName = value;
  //   }
  // }
}
