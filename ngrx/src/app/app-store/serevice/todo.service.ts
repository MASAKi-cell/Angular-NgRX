import { Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/app-store/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(
      private http: HttpClient
    ) {}

    
}
