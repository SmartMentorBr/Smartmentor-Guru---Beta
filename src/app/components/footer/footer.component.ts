import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FaqComponent} from '../../modals/faq/faq.component';
import {ComingSoonComponent} from '../../modals/coming-soon/coming-soon.component';
import {HomeApartofComponent} from '../../modals/home-apartof/home-apartof.component';
import {HomeDiagnoseComponent} from '../../modals/home-diagnose/home-diagnose.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public fb = FB;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(msg:string) {
    const dialogRef = this.dialog.open(ComingSoonComponent, {
      width: '450px',
      data: {message: msg}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.fb["CustomerChat"].showDialog();
      }
    });
  }

  openFaqDialog() {
    const dialogRef = this.dialog.open(FaqComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.fb["CustomerChat"].showDialog();
      }
    });
  }
  openDiagnoseDialog(): void {
    const dialogRef = this.dialog.open(HomeDiagnoseComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.fb["CustomerChat"].showDialog();
      }
    });
  }
  openApartofDialog(): void {
    const dialogRef = this.dialog.open(HomeApartofComponent, {
      width: '450px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.fb["CustomerChat"].showDialog();
      }
    });
  }
}
