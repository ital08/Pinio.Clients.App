import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' }) // the service is available application wide, so the same instance of this class will be available in the whole application

export class SharedService {

  searchSubject = new Subject<String>(); // a new subject of type String, replace it with your data type
}
