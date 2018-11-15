import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cookie} from '../models/cookie';

@Component({
  selector: 'cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent {
  public cookie: Cookie;
    constructor(private _http:HttpClient){
      this.getCookies(1);
    }

    public getCookies(id:number) {
      return  this._http.get('http://localhost:5978/api/cookie/' + id).subscribe(c => this.cookie = <Cookie>c);
    }

}
