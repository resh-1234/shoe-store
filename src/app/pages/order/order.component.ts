import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { data } from 'src/assets/data';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private router:Router,private hero:HeroService){}
  data= this.hero.givData()
  order:any
  ngOnInit(){

    let id = Number(localStorage.getItem('id'))
    this.order =data.filter(e=>e.id==id)
    // console.warn(MyData);
    
    console.log("name",this.order)
    
  }
}