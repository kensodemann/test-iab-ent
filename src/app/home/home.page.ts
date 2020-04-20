import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-enterprise/inappbrowser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private iab: InAppBrowser) {}

  open(target?: string) {
    this.iab.create('https://www.google.com', target).show();
  }
}
