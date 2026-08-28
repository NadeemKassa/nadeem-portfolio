import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Github { 

   private username = 'NadeemKassa';

  constructor(
    private http: HttpClient
  ) {}

  getRepositories() {

    return this.http.get(
      `https://api.github.com/users/${this.username}/repos`
    );

  }

}
