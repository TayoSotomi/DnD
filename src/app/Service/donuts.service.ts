import { Injectable } from '@angular/core';
import { Donut } from '../Model/donut';
import { DonutDetail } from '../Model/model.DonutDetail';

@Injectable({
  providedIn: 'root'
})
export class DonutsService {
  getByid(id: number): DonutDetail {
    throw new Error('Method not implemented.');
  }
  

  constructor() { }

  getAll():Donut[]{
    return this.donut;
  }
 

donut:Donut[]= [
  {
    "id": 1,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/1.json",
    "name": "Glazed",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d1.jpg",
    "photo_attribution": "https://www.publicdomainpictures.net/en/view-image.php?image=170500&picture=fresh-glazed-doughnut"
    },
    {
    "id": 2,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/2.json",
    "name": "Chocolate Glazed",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d2.jpg",
    "photo_attribution": "https://commons.wikimedia.org/wiki/File:Chocolate-glazed_doughnut_(1330895).jpg"
    },
    {
    "id": 3,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/3.json",
    "name": "Boston Cream",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d3.jpg",
    "photo_attribution": "https://commons.wikimedia.org/wiki/File:DD-Boston-Cream-Donut.jpg"
    },
    {
    "id": 4,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/4.json",
    "name": "Coconut Caramel Drizzle",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d4.jpg",
    "photo_attribution": "https://pxhere.com/en/photo/1618705"
    },
    {
    "id": 5,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/5.json",
    "name": "Cream Cheese Filled",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d5.jpg",
    "photo_attribution": "https://www.rawpixel.com/image/6064100/free-public-domain-cc0-photo"
    },
    {
    "id": 6,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/6.json",
    "name": "Cake",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d6.jpg",
    "photo_attribution": "https://commons.wikimedia.org/wiki/File:Entenmann-Cake-Donut.jpg"
    },
    {
    "id": 7,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/7.json",
    "name": "Jelly Filled",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d7.jpg",
    "photo_attribution": "https://commons.wikimedia.org/wiki/File:Powdered_Sugar_Jelly_Doughnut.jpg"
    },
    {
    "id": 8,
    "ref": "https://grandcircusco.github.io/demo-apis/donuts/8.json",
    "name": "Cider Mill Cinnamon Sugar",
    "photo": "https://grandcircusco.github.io/demo-apis/donuts/images/d8.jpg",
    "photo_attribution": "https://commons.wikimedia.org/wiki/File:Bunyol_de_carabassa.jpg"
    }
]

}
