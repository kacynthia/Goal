import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any, ...args: any[]): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime)
    const secondInDay =86400;
    var dateDifferenceSeconds=dateDifference*0.001;
    var dateCounter= dateDifferenceSeconds/secondInDay;
    if (dateCounter>=1 && value>todayWithNoTime){
      return dateCounter;

    }

    return 0;
  }

}
