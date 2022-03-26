import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from 'src/app/app-store/models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {

  constructor(
      private http: HttpClient
    ) {}

    /**
     * Todoデータを取得する。
     * @param offset 
     * @param limit 
     * @returns Todo[]
     */
    findAll(offset?: number, limit?: number): Observable<Todo[]> {
      const url = 'APIのアクセス先URL';
      let params = new HttpParams();
      params = offset ? params.set('offset', `${offset}`) : params;
      params = limit ? params.set('limit', `${limit}`) : params;
      return this.http.get<Todo[]>(url ,{ params });
    }

    
}
