import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Donut } from 'src/app/Model/donut';
import { DonutDetail } from 'src/app/Model/model.DonutDetail';
import { DonutsService } from 'src/app/Service/donuts.service';

@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent {
  
constructor(private route:ActivatedRoute, private donutService:DonutsService){}

  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    let id:number = Number(routeParams.get("id"));
    console.log(id);

    this.DisplayDonut = this.donutService.getByid(id);
}
DisplayDonut:DonutDetail = {} as DonutDetail;

}