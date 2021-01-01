import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitapService {

  url = "http://localhost:3000/kitaplar"
  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.url);
  }

  saveBook(data) {
    return this.http.post(this.url, data)
  }
  getCurrentBook(id) {
    return this.http.get(`${this.url}/${id}`)
  }
  deleteBook(id) {
    return this.http.delete(`${ this.url } / ${ id }`);
  }
  updateBook(id, data) {
    return this.http.put(`${this.url}/${id}`,data);
  }
}
