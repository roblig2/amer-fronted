import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
	imports: [
		MatButton,
		MatDialogActions,
		MatDialogContent,
		MatDialogTitle
	],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {
  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

    onYes(): void {
      this.dialogRef.close(true);
    }

    onNo(): void {
      this.dialogRef.close(false);
    }
}
