import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'messages',
  template: ` <div *ngFor="let message of apiService.messages" >
  <div class="card">
    <div class="card-body">
      {{message.message}}
    </div>
  </div>
</div> `,
  
})
export class MessagesComponent {
  constructor( private apiService: ApiService){}
  ngOnInit(){
      this.apiService.getMessages();
  }
}
