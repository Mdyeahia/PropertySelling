import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Birla House',
      Type: 'House',
      Price: 12000,
    },
    {
      Id: 1,
      Name: 'King House',
      Type: 'House',
      Price: 10000,
    },
    {
      Id: 1,
      Name: 'Queen House',
      Type: 'House',
      Price: 8000,
    },
    {
      Id: 1,
      Name: 'Pet House',
      Type: 'House',
      Price: 300,
    },
    {
      Id: 1,
      Name: 'Cat House',
      Type: 'House',
      Price: 900,
    },
    {
      Id: 1,
      Name: 'Dear House',
      Type: 'House',
      Price: 900,
    },

  ];

  constructor() {}

  ngOnInit(): void {}
}
