import { DialogboxserviceService } from './dialogboxservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-dialog';
  conf: string;
  constructor(private dialog: DialogboxserviceService) { }

  launchDialog() {
    let returnval = this.dialog.showDialog(true, "Test Message");
  }

  ngOnInit() {
    this.dialog.dialogconf.subscribe((data: boolean) => {
      this.conf = data ? "Ok clicked" : "Cancel Clicked";
    });
  }

}
