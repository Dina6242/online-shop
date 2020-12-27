import { Injectable } from '@angular/core';
import { Lang } from '../../_model/lang';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  langs: Lang[] = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Arabic'},
    {id: 3, name: 'French'}
  ];

  constructor() {
  }

  gatAll(): Lang[] {
 return this.langs ;
  }
}
