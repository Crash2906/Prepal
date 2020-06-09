import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pack-ver',
  templateUrl: './pack-ver.component.html',
  styleUrls: ['./pack-ver.component.css']
})
export class PackVerComponent implements OnInit {
  lols: string[] = ['rai1', 'rai2', 'rai3'];

  Datos: Array<any> = [
    {}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
