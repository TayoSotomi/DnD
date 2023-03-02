import { Component, Input } from '@angular/core';
import { Complete } from 'src/app/Model/devs';


@Component({
  selector: 'app-famous-person-detail',
  templateUrl: './famous-person-detail.component.html',
  styleUrls: ['./famous-person-detail.component.css']
})
export class FamousPersonDetailComponent {
@Input() person:Complete = {} as Complete;
dispaly:boolean = false;

toggleDispaly():void{
  this.dispaly = !this.dispaly;
}

}
