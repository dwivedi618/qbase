import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AboutquestionpaperComponent } from '../aboutquestionpaper/aboutquestionpaper.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AboutquestionpaperComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
