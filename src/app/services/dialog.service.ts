import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutquestionpaperComponent } from '../aboutquestionpaper/aboutquestionpaper.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  openDialog(component) {
    const dialogRef = this.dialog.open(component);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
