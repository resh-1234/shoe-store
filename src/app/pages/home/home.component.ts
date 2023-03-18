import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  shoeData:any;
  service: any;
  ngOnInit(): void {
    this.shoeData=this.service.shoeDetails;
    
  }
}
