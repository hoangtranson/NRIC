
import { Component, OnInit } from '@angular/core';
import { NricService } from 'nric';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'NRIC';

  constructor(private icService: NricService) {}

  ngOnInit(): void {
    console.log('testnric service', this.icService.isNRICValid('560224-10-8354'));

  }
}
