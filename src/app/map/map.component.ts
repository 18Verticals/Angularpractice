import { Component, OnInit } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-map-api',
  standalone: false,
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit {
  outputData:number[]=[];

  ngOnInit(): void {
   const observable=of(1,2,3,4,5,6,7,8,9,10);
   observable.pipe(
    map(data => data * 2)
   ).subscribe(data => {
    this.outputData.push(data);
   })
  }

}
