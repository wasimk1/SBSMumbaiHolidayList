import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [DatePipe],
  selector: 'app-holiday',
  styleUrl: './holiday.css',
  templateUrl: './holiday.html',
})
export class Holiday {
  //strImageName: string = 'images/mumbaiholidaylist2026.jpg';
  strImageName: string = '';
  strAltName: string = 'mumbai holiday list 2026';
  intSrNo: number = 0;
  getDay(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
    });
  }
  getSrNo(monthIndex: number, holidayIndex: number): number {
    let count = 0;

    for (let i = 0; i < monthIndex; i++) {
      count += this.tableData[i].strHolidayName.length;
    }

    return count + holidayIndex + 1;
  }
  tableHeader: string[] = ['Sr.No.', 'Month', 'Date', 'Day', 'Holiday'];
  tableData: any[] = [
    {
      strMonthName: 'January',
      strHolidayName: ['Republic Day'],
      HolidayDate: [new Date('2026-01-26')],
    },
    {
      strMonthName: 'March',
      strHolidayName: ['Holi', 'Gudi Padwa', 'Eid-ul-Fitr'],
      HolidayDate: [new Date('2026-03-03'), new Date('2026-03-19'), new Date('2026-03-21')],
    },
    {
      strMonthName: 'May',
      strHolidayName: ['Maharashtra Day', 'Bakri Eid'],
      HolidayDate: [new Date('2026-05-01'), new Date('2026-05-27')],
    },
    {
      strMonthName: 'August',
      strHolidayName: ['Independence Day', 'Raksha Bandhan'],
      HolidayDate: [new Date('2026-08-15'), new Date('2026-08-28')],
    },
    {
      strMonthName: 'September',
      strHolidayName: ['Krishna Janmashtami', 'Ganesh Chaturthi'],
      HolidayDate: [new Date('2026-09-04'), new Date('2026-09-14')],
    },
    {
      strMonthName: 'October',
      strHolidayName: ['Gandhi Jayanti', 'Dussehra'],
      HolidayDate: [new Date('2026-10-02'), new Date('2026-10-20')],
    },
    {
      strMonthName: 'November',
      strHolidayName: ['Diwali', 'Diwali', 'Diwali'],
      HolidayDate: [new Date('2026-11-09'), new Date('2026-11-10'), new Date('2026-11-11')],
    },
    {
      strMonthName: 'December',
      strHolidayName: ['Christmas'],
      HolidayDate: [new Date('2026-12-25')],
    },
  ];
}
