import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from './music.model';
import { API } from 'src/config/api';
@Injectable({
  providedIn: 'root'
})
export class MusicService {


  constructor(private http: HttpClient) { }

  findAll():Observable<Music[]> {
    return this.http.get<Music[]>(`${API.url}/music`);
  }
}
