import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {HomeSolutionComponent} from '../../modals/home-solution/home-solution.component';
import {HomeDiagnoseComponent} from '../../modals/home-diagnose/home-diagnose.component';
import {HomeApartofComponent} from '../../modals/home-apartof/home-apartof.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public fb = FB;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(FB);
    //this.initFb();
  }

  ngAfterViewInit() {
    this.fb["CustomerChat"].hideDialog();
  }
    // initFb() {
    //  console.log(FB);
    // if('CustomerChat' in FB){
     // console.log(FB["CustomerChat"]["showDialog"]());
    //}
    // window.fbAsyncInit = (FB) => {
    //   console.log(FB)
    // };
    // FB.CustomerChat.showDialog();
    // window["fbAsyncInit"] = function() {
    //   console.log(FB);
    // }
  //}
  openDialog(msg:string) {
    const dialogRef = this.dialog.open(HomeSolutionComponent, {
      width: '450px',
      data: {message: msg}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.fb["CustomerChat"].showDialog();
      }
    });
  }
  openGuru() {
    this.fb["CustomerChat"].showDialog();
  }
  openSolutionDialog(): void {
    const dialogRef = this.dialog.open(HomeSolutionComponent, {
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
