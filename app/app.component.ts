import { Component, HTMLFormElement, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
defaultQuestion='pet';
answer='';
genders=['male','female'];
user={
	username:'',
	email:'',
	secretQuestion:'',
	answer:'',
	gender:''
};
@ViewChild('f') signupform: NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
   // this.signupform.setValue({
   // username: suggestedName,
    //email: ''
   // },
   // secret:'pet',
   // questionAnswer:'',
   // gender:'male')
   this.signupform.form.patchValue({
   userData: {
   username:suggestedName
   }
   })
  }
  //onSubmit(form: NgForm)
  //{
  //console.log("Submitted!!");
  //  console.log(form);
 // }
 onSubmit()
 {
 this.submitted=true;
 console.log(this.signupform);
 this.user.username=this.signupform.value.userData.username;
this.user.email=this.signupform.value.userData.email;
this.user.secretQuestion=this.signupform.value.userData.secret;
this.user.answer=this.signupform.value.userData.questionAnswer;
this.user.gender=this.signupform.value.userData.gender;

this.signupform.reset();
 }

}

