import { Component } from '@angular/core';
import { Donut } from 'src/app/Model/donut';
import { DonutsService } from 'src/app/Service/donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

  constructor(private donutService:DonutsService){

  }

  AllDonuts:Donut[]=[];

  ngOnInit(){
    this.AllDonuts = this.donutService.getAll();
  }

}
