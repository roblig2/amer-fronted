import { Inject, Injectable, Optional } from '@angular/core';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { Moment } from 'moment';
import * as moment from 'moment';
import {MAT_DATE_LOCALE} from "@angular/material/core";
import {DAYS, MONTHS} from "./custom-date-adapter";

@Injectable()
export class CustomMomentDateAdapter extends MomentDateAdapter {

  constructor(@Optional() @Inject(MAT_DATE_LOCALE) dateLocale: string) {
    super(dateLocale);
  }

  override getFirstDayOfWeek(): number {
    return 1;
  }

  override getMonthNames(style: 'long' | 'short' | 'narrow'): string[] {
    return MONTHS[style];
  }
  override getDayOfWeekNames(style: 'long' | 'short' | 'narrow'): string[] {
    return DAYS[style]
  }
  // Nadpisanie formatowania wyświetlania daty, w tym wybranego miesiąca w nagłówku
  override format(date: Moment, displayFormat: string): string {

    if (displayFormat === 'MMM YYYY') {
      // Wyświetlanie miesiąca i roku w nagłówku
      const month = date.month();
      const year = date.year();
      return `${MONTHS['long'][month]} ${year}`;
    } else if (displayFormat === 'DD.MM.YYYY') {
      return super.format(date, displayFormat)
    }
    else {
      return super.format(date, displayFormat)
    }
  }

  override createDate(year: number, month: number, date: number): Moment {
    // Moment.js will create an invalid date if any of the components are out of bounds, but we
    // explicitly check each case so we can throw more descriptive errors.
    if (month < 0 || month > 11) {
      throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
    }

    if (date < 1) {
      throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
    }

    let result = moment.utc({ year, month, date }).locale(this.locale);

    // If the result isn't valid, the date must have been out of bounds for this month.
    if (!result.isValid()) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result;
  }
}
