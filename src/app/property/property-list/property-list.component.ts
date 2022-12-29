import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ HousingService} from 'src/app/services/housing.service'

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties:any;

  constructor(private houseingService:HousingService) {}

  ngOnInit(): void {
    this.houseingService.getAllProperty().subscribe(
      data=>{this.properties=data;
      console.log(data)
      },error=>{
        console.log("list not found")
      }
      );
  }
}
