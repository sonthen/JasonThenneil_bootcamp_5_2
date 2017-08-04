import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class APIService {

  constructor(private http:Http, private router:Router) { }

  // login(email:string, password:string){
  //   let data = {
  //     "email": email,
  //     "password": password
  //   };
  //   let body = JSON.stringify(data);
  //   let headers = new Headers ({ "Content-Type":"application/json"});
  //   let options = new RequestOptions({ headers : headers});

  //   this.http.post('http://localhost:8000/api/login', body, options)
  //   .subscribe(
  //     result => {
  //       localStorage.setItem('token', result.json().token); //untuk simpan ke cookies
  //       this.router.navigate(['user']);
  //     },
  //     err => {
  //       localStorage.removeItem('token');
  //       this.router.navigate(['register']);
  //     }
  //   )
  // }



  getEventList(){
    return this.http.get('http://localhost:8000/api/getEvent')
    .map(result=> result.json());

  }

  addEvent (name:string, date:string, location:string, price:number, qty:number, description:string){
   
    let data = {
      "name": name,
      "date": date,
      "location": location,
      "price": price,
      "qty": qty,
      "description": description,
    };
    let body = JSON.stringify(data);
    let headers = new Headers ({ 
      "Content-Type":"application/json"
    });
    
    let options = new RequestOptions({ headers : headers});

    return this.http.post('http://localhost:8000/api/addEvent', body, options)
    .map(result=> result.json());
     
  }

  buy (id:number){
    

    console.log(id);
    let data = {
      "id": id
    };
    let body = JSON.stringify(data);
    
    let headers = new Headers ({ 
      "Content-Type":"application/json"
    });
    
    let options = new RequestOptions({ headers : headers});

    return this.http.post('http://localhost:8000/api/buy', body)
    .map(result=> result.json());
      
  }

}
