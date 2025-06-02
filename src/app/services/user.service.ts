import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppUser } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Backend API base URL
  private baseUrl = 'http://localhost:5062/api/user';

  constructor(private http: HttpClient) { }

  /**
   * Sends a registration request to the backend.
   * @param user The user registration data.
   * @returns Observable with API response.
   */
  registerUser(user: AppUser): Observable<string> {
  return this.http.post(`${this.baseUrl}/register`, user, {
    responseType: 'text'
  } as unknown as {
    responseType: 'text';
  });
}

}
