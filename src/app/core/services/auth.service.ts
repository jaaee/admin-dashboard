import { HttpClient } from '@angular/common/http';
import { inject,Injectable } from '@angular/core';
import { LoginRequest } from '../../features/auth/models/login-request';
import { LoginResponse } from '../../features/auth/models/login-response';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../shared/constants/api.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


   private baseUrl = 'http://localhost:8080/api/auth';
 
 private http = inject(HttpClient)

  login(request: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>(
      API_ENDPOINTS.LOGIN,
      request
    );
  }
}
