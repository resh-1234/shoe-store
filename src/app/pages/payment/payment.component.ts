import { Component } from '@angular/core';
import { FireService } from 'src/app/fire.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  name:string=''
  address:string=''
  city:string=''
  zip:string=''
  mob:string=''
  

  details:any
name1: any;
cnum: any;
exp: any;
cvv: any;

  constructor(private fire:FireService){}

  ngOnInit(){
    this.fire.getcontact().subscribe((data: any) =>{
      this.details=data
    })
  }

  submit(){
    if(!this.name||!this.address||!this.city||!this.zip||!this.mob){
      alert('please fill the fields');
      return;
    }
    let info={
      name:this.name,
      address:this.address,
      city:this.city,
      zip:this.zip,
      mob:this.mob

    }
    this.fire.submit(info)  
    if(this.name == ''){
      console.log(this.name)
      alert('please enter name')
      return;
    }
    if(this.name == ''){
      console.log(this.address)
      alert('please enter name')
      return;
    }
    if(this.name == ''){
      console.log(this.address)
      alert('please enter name')
      return;
    }
    if(this.name == ''){
      console.log(this.city)
      alert('please enter name')
      return;
    }
    if(this.name == ''){
      console.log(this.zip)
      alert('please enter name')
      return;
    }
    if(this.name == ''){
      console.log(this.mob)
      alert('please enter name')
      return;
    }
    this.name=''
    this.address=''
    this.city=''
    this.zip=''
    this.mob=''  
  }
}
