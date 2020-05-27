import { Injectable } from '@angular/core';

import { AboutquestionpaperComponent } from '../aboutquestionpaper/aboutquestionpaper.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  openDialog(component,config) {
    const dialogRef = this.dialog.open(component,config);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
