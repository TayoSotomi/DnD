import { Component } from '@angular/core';
import {  Donuts } from 'src/app/Model/donut';
import { DonutsService } from 'src/app/Service/donuts.service';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styleUrls: ['./donuts.component.css']
})
export class DonutsComponent {

Result:Donuts ={} as Donuts;

  constructor(private donutService:DonutsService){

  }

  ngOnInit(){
    this.donutService.GetDonuts().subscribe((response:Donuts)=>{
      console.log(response);
      this.Result = response;
    });
  }

}
