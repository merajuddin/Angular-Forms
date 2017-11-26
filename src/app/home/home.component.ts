import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent{

  languages = ["English", "Spanish", "Other"];
  hasPrimaryLanguageError: boolean = false;

  model = new Employee('', '', true, 'w2', 'default');

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
