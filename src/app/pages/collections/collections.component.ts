import { Component } from '@angular/core';
import { data } from 'src/assets/data';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent {

  constructor(private router:Router){}
  data=data
  
  gotoHere(id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/order']);
  }
}
