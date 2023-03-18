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

  contact(){
    let info={
      name:this.name,
      email:this.email,
      msg:this.msg

    }
    this.fire.contact(info)
    console.log(this.name)
    console.log(this.email)
   
    this.name=''
    this.email=''
    this.msg=''
  }

}
