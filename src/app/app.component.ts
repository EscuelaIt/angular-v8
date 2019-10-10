import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  deferredPrompt;

  constructor() {

  }

  @HostListener('window:beforeinstallprompt', ['$event'])
  onbeforeinstallprompt(e) {
    console.log(e);
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    this.deferredPrompt = e;
  }

  promptUserInstall() {
    this.deferredPrompt.prompt();
    this.deferredPrompt.userChoice.then((outcome) => {
      console.log(outcome); // either "accepted" or "dismissed"
    });
  }

}
