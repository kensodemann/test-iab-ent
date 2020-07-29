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
    console.log('open iab', target);
    this.iab
      .create('https://www.google.com', target, {
        hidden: 'no',
        clearcache: 'yes',
        clearsessioncache: 'yes',
        toolbarposition: 'top',
        location: 'yes'
      })
      .show();
  }
}
