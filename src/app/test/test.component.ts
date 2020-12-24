import { Component, OnInit } from '@angular/core';
import { interval, observable, Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    // const  t =  interval(2000);
    // t.subscribe(
    //   (value: number) => {console.log(value); },
    //   (error: any) => {},
    //   () => {}
    // );
    // this.myNewFun(2, 3).then((value: number) => alert(value));
  }

  myFunc(resolve: (value?: number) => void, reject: (reason?: any) => void): void {
    resolve(15);
  }

  myNewFun(no1: number, no2: number): Promise<number> {
    return new Promise((resolve, resject) => {
      resolve(no1 + no2);
    });
  }
}
