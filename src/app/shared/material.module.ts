import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, DATE_PIPE_DEFAULT_TIMEZONE} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {TablePaginatorIntl} from "./table-paginator-intl";
import {
  DateAdapter, ErrorStateMatcher,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  provideNativeDateAdapter,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material/core";
import {CUSTOM_DATE_FORMATS, CustomDateAdapter} from "./custom-date-adapter";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MAT_MOMENT_DATE_FORMATS} from "@angular/material-moment-adapter";
import {CustomMomentDateAdapter} from "./custom-moment-date-adapter";
import {MatListModule} from "@angular/material/list";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatChip, MatChipListbox} from "@angular/material/chips";



@NgModule({
  declarations: [],
  providers: [{provide: MatPaginatorIntl, useClass: TablePaginatorIntl}, provideNativeDateAdapter(),
    {provide: LOCALE_ID, useValue: 'pl-PL'},
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: CustomMomentDateAdapter },
    {provide: MAT_DATE_LOCALE, useValue: 'pl-PL'}],

  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIcon,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatAutocompleteModule,
    MatChipListbox,
    MatChip


  ],
  exports:[
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIcon,
    MatDatepickerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    MatListModule,
    MatAutocompleteModule,
    MatChipListbox,
    MatChip
  ]
})
export class MaterialModule { }
