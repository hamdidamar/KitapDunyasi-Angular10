import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  url = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  saveMessage(data) {
    console.log(data);
    return this.http.post(this.url + "/mesajlar", data);
  }
}
