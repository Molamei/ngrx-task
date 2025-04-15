import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class protocolsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://192.168.2.97/iCodeVettProAPI/api/RadiologistIntegration/LoadOrderProtocols/8c8e3dd2-9f33-4a05-b669-e11b3568e442');
  }
}
