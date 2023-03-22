import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name:string=''
  email:string=''
  msg:string=''

  details:any

  constructor(private fire:FireService){}

  ngOnInit(){
    this.fire.getcontact().subscribe((data: any) =>{
      this.details=data
    })
  }

  submit(){
    if(!this.name||!this.email||!this.msg){
      alert('please fill the fields');
      return;
    }
    let info={
      name:this.name,
      email:this.email,
      msg:this.msg

    }
    this.fire.submit(info)  
    if(this.name == ''){
      console.log(this.name)
      alert('please enter name')
      return;
    }
    this.fire.submit(info)  
    if(this.name == ''){
      console.log(this.email)
      alert('please enter your email')
      return;
    }
    this.fire.submit(info)  
    if(this.name == ''){
      console.log(this.msg)
      alert('please enter the msg')
      return;
    } 
    this.name=''
    this.email=''
    this.msg=''
  }

}
  

