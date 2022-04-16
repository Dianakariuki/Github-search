import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private token= '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';

  constructor() { }
}
