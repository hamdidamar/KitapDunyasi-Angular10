import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitapService {

  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url + "/kitaplar");
  }

  saveBook(data) {
    return this.http.post(this.url + "/kitaplar", data)
  }
  getCurrentBook(id) {
    return this.http.get(`${this.url + "/kitaplar"}/${id}`)
  }
  deleteBook(id) {
    return this.http.delete(`${ this.url + "/kitaplar" } / ${ id }`);
  }
  updateBook(id, data) {
    return this.http.put(`${this.url + "/kitaplar"}/${id}`,data);
  }

  saveOrder(data) {
    return this.http.post(this.url + "/siparisler", data)
  }

  saveMessage(data) {
    console.log("aksdasdl");
    return this.http.post(this.url + "/mesajlar", data)
   
  }

}
