import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [DatePipe],
  selector: 'app-holiday',
  styleUrl: './holiday.css',
  templateUrl: './holiday.html',
})
export class Holiday implements OnInit {
  // Image properties
  strImageName: string = '';
  strAltName: string = 'mumbai holiday list 2026';

  // Other properties
  intSrNo: number = 0;

  currentHoliday: any = null;
  upcomingHoliday: any = null;

  tableHeader: string[] = ['Sr.No.', 'Month', 'Date', 'Day', 'Holiday'];

  // Holiday data
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

  // Get day name from date
  getDay(date: Date): string {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
    });
  }

  // Get serial number
  getSrNo(monthIndex: number, holidayIndex: number): number {
    let count = 0;

    for (let i = 0; i < monthIndex; i++) {
      count += this.tableData[i].strHolidayName.length;
    }

    return count + holidayIndex + 1;
  }

  // Normalize date (remove time)
  private normalizeDate(date: Date): Date {
    const normalized = new Date(date);
    normalized.setHours(0, 0, 0, 0);
    return normalized;
  }

  // Get today's holiday and next upcoming holiday
  getHolidayInfo(): void {
    const today = this.normalizeDate(new Date());

    const allHolidays: any[] = [];

    // Collect all holidays
    for (const month of this.tableData) {
      for (let i = 0; i < month.HolidayDate.length; i++) {
        const holidayDate = this.normalizeDate(month.HolidayDate[i]);

        allHolidays.push({
          name: month.strHolidayName[i],
          date: holidayDate,
          month: month.strMonthName,
        });
      }
    }

    // Sort holidays by date
    allHolidays.sort((a, b) => a.date.getTime() - b.date.getTime());

    // Find today's holiday
    this.currentHoliday = allHolidays.find((h) => h.date.getTime() === today.getTime()) || null;

    // Find the next future holiday (exclude today)
    this.upcomingHoliday = allHolidays.find((h) => h.date.getTime() > today.getTime()) || null;
  }

  // Check if holiday is today
  isTodayHoliday(date: Date): boolean {
    if (!this.currentHoliday) return false;

    return this.normalizeDate(date).getTime() === this.currentHoliday.date.getTime();
  }

  // Check if holiday is the next upcoming holiday
  isUpcomingHoliday(date: Date): boolean {
    if (!this.upcomingHoliday) return false;

    return this.normalizeDate(date).getTime() === this.upcomingHoliday.date.getTime();
  }

  // Check if holiday is in the past
  isPastHoliday(date: Date): boolean {
    const today = this.normalizeDate(new Date());

    return this.normalizeDate(date).getTime() < today.getTime();
  }

  ngOnInit(): void {
    this.getHolidayInfo();
  }
}
