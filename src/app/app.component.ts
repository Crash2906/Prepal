import { Component } from '@angular/core';
import { JsonServicesService } from './json-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Preparatoria Laguna';

  constructor(public json: JsonServicesService) {
    this.json.getJson('http://127.0.0.1:3333/Packs/Take').subscribe((res: any) => {
      console.log(res);
    });

  }

}

