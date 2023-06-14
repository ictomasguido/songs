import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = environment.url

  constructor(private http: HttpClient) {

  }

  getSongs() {
    return this.http.get(this.url + `/songs`)
  }

}
