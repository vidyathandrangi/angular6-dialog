import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DialogboxserviceService {

  @Output() dialogconf: EventEmitter<boolean> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  showDialog(confirmation: boolean, message: string) {

    const dialogRef = this.dialog.open(DialogboxComponent, {
      width: '250px',
      height: '250px',
      data: { title: message, confirmation: confirmation }
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result)
        this.dialogconf.emit(true);
      else
        this.dialogconf.emit(false);
    });


  }
}
