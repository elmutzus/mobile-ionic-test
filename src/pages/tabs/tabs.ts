import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
