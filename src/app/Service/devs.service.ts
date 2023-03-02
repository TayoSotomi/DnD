import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Devs } from '../Model/devs';

@Injectable({
  providedIn: 'root'
})
export class DevsService {

url: string = "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";

constructor(private http:HttpClient) { }

  getDevs():Observable<Devs>{

    return this.http.get<Devs>(`${this.url}`)
  };

}
