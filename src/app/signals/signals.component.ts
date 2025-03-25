import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: false,
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  counter=signal(0);
  doubleCounter=computed(()=>this.counter()*2);
  increment(){
   this.counter.update(count=>count+1);
  }
  firstName=signal("Divya");
  lastName=signal<string>("Pathar");
   courseName:string="Angular";
constructor(){
  setTimeout(() => {
    this.courseName="HTML";
    this.firstName.set("Sima");
  }, 5000);
}
  
}
