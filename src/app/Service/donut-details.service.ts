import { Injectable } from '@angular/core';
import { Donut } from '../Model/donut';
import { DonutDetail } from '../Model/model.DonutDetail';

@Injectable({
  providedIn: 'root'
})
export class DonutDetailsService {

  constructor() { }

  getByid(id:number):DonutDetail{
    return this.donutDetail;
  }

    donutDetail:DonutDetail= 
       {
      "id": 1,
      "ref": "https://grandcircusco.github.io/demo-apis/donuts/1.json",
      "name": "Glazed",
      "calories": 260,
      "extras": [
      "sugar glaze"
      ],
      "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d1.jpg",
      "photo_attribution": "https://www.publicdomainpictures.net/en/view-image.php?image=170500&picture=fresh-glazed-doughnut"
      }

     
  }

