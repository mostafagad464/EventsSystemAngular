import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Admin } from '../_models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8080/";

  adm:Admin =new Admin();

  private userSubject: BehaviorSubject<Admin>;
  public admin: Observable<Admin>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('admin')!));
    this.admin = this.userSubject.asObservable();
  }

  public get adminValue(): Admin {
    return this.userSubject.value;
  }

  login(req: object) {
    return this.http.post<Admin>(this.baseUrl + "login", req)
      .pipe(map(adm => {
        localStorage.setItem('admin', JSON.stringify(adm));
        this.userSubject.next(adm);
        return adm;
      }))
  }
  logout() {
    localStorage.removeItem('admin');
    this.userSubject.next(this.adm);
    this.router.navigate(['/login']);
  }
}
