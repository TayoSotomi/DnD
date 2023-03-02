import { Component } from '@angular/core';
import { Devs } from 'src/app/Model/devs';
import { DevsService } from 'src/app/Service/devs.service';

@Component({
  selector: 'app-famous-people',
  templateUrl: './famous-people.component.html',
  styleUrls: ['./famous-people.component.css']
})
export class FamousPeopleComponent {

constructor(private devsService:DevsService){}

result:Devs = {} as Devs;

ngOnInit(){
  this.devsService.getDevs().subscribe((response:Devs)=>{
    this.result =response;

    console.log(response);
  })
}
}
