import { HttpClient } from '@angular/common/http';
import { HtmlParser, Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, pipe } from 'rxjs';
import { Speaker } from '../_models/speaker';


@Injectable({
  providedIn: 'root'
})
export class SpeakerService {

  baseUrl = "http://localhost:8080/speakers";

  private userSubject: BehaviorSubject<Speaker>;
  public speaker: Observable<Speaker>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<Speaker>(JSON.parse(localStorage.getItem('speaker')!));
    this.speaker = this.userSubject.asObservable();
  }

  // public get speakerValue(): Speaker {
  //   return this.userSubject.value;
  // }

  // // login(emial: string, password: string) {
  // login(req:object) {
  //   // return this.http.post<Speaker>(this.baseUrl,req)
  //   return this.http.post<Speaker>(this.baseUrl,req)
  //     .pipe(map(spk => {
  //       console.log();
  //       localStorage.setItem('speaker', JSON.stringify(spk));
  //       this.userSubject.next(spk);
  //       return spk;
  //     }))
  // }
  // logout(){
  //   localStorage.removeItem('speaker');
  //   // this.userSubject.next(null);
  //   this.router.navigate(['/login']);
  // }

  register(spk:Speaker){
    return this.http.post(this.baseUrl,spk)
  }

  getAllSpeakers() {
    return this.http.get<Speaker[]>(this.baseUrl);
  }
  getSpeaker(id: string) {
    return this.http.get<Speaker>(this.baseUrl + "/" + id);
  }
  createSpeaker(speaker: Speaker) {
    return this.http.post<string>(this.baseUrl, speaker);
  }
  editSpeaker(id: string, speaker: Speaker) {
    return this.http.put<string>(this.baseUrl + "/" + id, speaker);
  }
  deleteSpeaker(id: string) {
    return this.http.delete<Speaker>(this.baseUrl + "/" + id);
  }
}
