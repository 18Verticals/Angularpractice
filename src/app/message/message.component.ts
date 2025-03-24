import { Component, inject, OnInit } from '@angular/core';
import { MessageService } from '../../Service/message.service';

@Component({
  selector: 'app-message',
  standalone: false,
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent implements OnInit {
message:string='';
 constructor(private messageService:MessageService){}

  ngOnInit(): void {
 this.message=this.messageService.getMessage();
  }
}
