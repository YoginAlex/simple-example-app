import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

@Injectable()
export class AppService {
  constructor(
    private http: Http
  ) { }

  public getData() {
    return this.http.get('./assets/data.json');
  }
}
