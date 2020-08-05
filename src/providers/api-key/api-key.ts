import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiKeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiKeyProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiKeyProvider Provider');
  }

}
