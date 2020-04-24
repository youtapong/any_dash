import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  productUrl = 'https://api.codingthailand.com/api/course';
  newsUrl = 'https://newsapi.org/v2/top-headlines?country=th&apiKey=86850818a2214e0880ca0b086d45803d';
  registerUrl = 'https://api.codingthailand.com/api/register';
  loginUrl = 'https://api.codingthailand.com/api/login';
  profileUrl = 'https://api.codingthailand.com/api/me';
  goldUrl = 'http://www.thaigold.info/RealTimeDataV2/gtdata_.txt';
  customerUrl = 'http://1.10.184.234:8164/webservice/bb_data/custlist.php';

  constructor(
    private http: HttpClient
  ) { }

  isLogin(): boolean {
    const token = JSON.parse(localStorage.getItem('token'));
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  register(name: string, email: string, password: string, dob: string): Observable<any> {
    const body = {
      "name": name,
      "email": email,
      "password": password,
      "dob": dob
    };
    return this.http.post(this.registerUrl, body).pipe(
      catchError(this.handleError)
    );
  }

  login(email: string, password: string): Observable<any> {
    const body = {
      "email": email,
      "password": password
    };
    return this.http.post(this.loginUrl, body).pipe(
      catchError(this.handleError)
    );
  }


  getProfile(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token'));
    const myHeader = {
      Authorization: 'Bearer ' + token.access_token
    };
    const body = {};
    return this.http.post(this.profileUrl, body, { headers: myHeader }).pipe(
      catchError(this.handleError)
    );
  }


  getProduct(): Observable<any> { /// check type any or any[] 
    return this.http.get<any>(this.productUrl);
  }

  /// https://api.codingthailand.com/api/course/2
  getDetail(id: number): Observable<any> { /// check type any or any[]    
    return this.http.get<any>(this.productUrl + '/' + id.toString());
  }

  //// ถ้าใช้ ? จะมีตัวแปรหรือไม่ก็ได้
  getNews(page?: number, pageSize?: number): Observable<any> { /// check type any or any[] 
    const myNewsUrl = `${this.newsUrl}&page=${page}&pageSize=${pageSize}`;
    return this.http.get<any>(myNewsUrl);
  }

  getGold(): Observable<any> {
    /// check type any or any[] 
    let header = new HttpHeaders();
    header.set('Access-Control-Allow-Origin', '*');
    return this.http.get<any>(this.goldUrl);
  }

  getCustomer(page?: number, queryString?: string, sorttype?: string): Observable<any> { /// check type any or any[] 
    const customerUrl = `${this.customerUrl}?page=${page}&queryString=${queryString}&sorttype=${sorttype}`;
    return this.http.get<any>(customerUrl);
  }


  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }



}
