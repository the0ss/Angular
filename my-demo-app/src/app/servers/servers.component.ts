import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowAddServer=false;

  constructor(){
    setTimeout(()=>{
      this.allowAddServer=true;
    },2000)
  }
}
