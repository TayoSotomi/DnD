import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Donuts, Donutsingle } from '../Model/donut';


@Injectable({
  providedIn: 'root'
})
export class DonutsService {

  url:string = "https://grandcircusco.github.io/demo-apis/donuts";
  constructor(private http:HttpClient) { }

  GetDonuts():Observable<Donuts>{
    return this.http.get<Donuts>(`${this.url}.json`);
  }

  GetDonutById(id:number):Observable<Donutsingle>{
    return this.http.get<Donutsingle>(`${this.url}/${id}.json`);
  }
 
}
