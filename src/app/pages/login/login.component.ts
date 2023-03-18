import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LogInComponent {
  name:string='';
  email: string='';
password: string='';
email1: string='';
password1: string='';
cpassword: string='';


constructor(private fire:FireService) {

}

register(){
  console.log(this.name)
  console.log(this.email)
  console.log(this.password)
  console.log(this.cpassword)
  this.fire.signUp(this.email,this.password)
  this.name='' 
  this.email=''
  this.password=''
  this.cpassword=''
}


login(){
  console.log(this.email1)
  console.log(this.password1)
  this.fire.logIn(this.email1,this.password1)
  this.email1=''
  this.password1=''
}
}




