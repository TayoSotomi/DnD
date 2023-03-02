import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donuts, Donutsingle } from 'src/app/Model/donut';

import { DonutsService } from 'src/app/Service/donuts.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent {
  result:Donutsingle = {} as Donutsingle;
constructor(private route:ActivatedRoute, private donutService:DonutsService){}

 ngOnInit(){
 let paramMap = this.route.snapshot.paramMap;
 let id:number =Number( paramMap.get("id"));

 this.donutService.GetDonutById(id).subscribe((response:Donutsingle)=>{
  console.log(response);
  this.result = response;
 })
 }
}