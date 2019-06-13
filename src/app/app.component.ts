
import { Component, OnInit } from '@angular/core';

import { NricService } from 'nric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NRIC';

  constructor(private service: NricService) {}
}
