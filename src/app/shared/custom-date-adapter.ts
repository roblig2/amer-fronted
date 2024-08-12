import {Injectable} from '@angular/core';
import {MatDateFormats, NativeDateAdapter} from '@angular/material/core';

@Injectable()
export class CustomDateAdapter extends NativeDateAdapter {
  override getFirstDayOfWeek(): number {
    return 1; // Ustawienie pierwszego dnia tygodnia na poniedziałek (0: Niedziela, 1: Poniedziałek)
  }
}

export const CUSTOM_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  }

};

