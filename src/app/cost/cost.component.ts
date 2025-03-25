import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost',
  standalone: false,
  templateUrl: './cost.component.html',
  styleUrl: './cost.component.scss'
})
export class CostComponent implements OnInit {
    ngOnInit(): void {
    const storedCost = localStorage.getItem('costs');
    if(storedCost){
      this.costs=JSON.parse(storedCost);
    }
    }

    costs: { name: string; amount: number}[] = [];
    newCost = {
      name: '',
      amount: 0,
    };
  
    addCost() {
      if (this.newCost.name && this.newCost.amount) {
        this.costs.push({ ...this.newCost });
        localStorage.setItem('costs',JSON.stringify(this.costs));
        this.newCost.name = '';
        this.newCost.amount = 0;
      }
    }
  
    totalCost() {
      return this.costs.reduce((total, cost) => total + cost.amount, 0);
    }
  }
  

