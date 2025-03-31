import { Component, OnInit } from '@angular/core';
import { filter, of } from 'rxjs';

@Component({
  selector: 'app-filter-api',
  standalone: false,
  templateUrl: './filter-api.component.html',
  styleUrl: './filter-api.component.scss'
})
export class FilterApiComponent implements OnInit {
outputData:number[]=[];

ngOnInit(): void {
  const observable=of(1,2,3,4,5,6,7,8,9,10);
  observable.pipe(
    filter(data => data > 7)).subscribe(data => {
      this.outputData.push(data);
    });
}

}
