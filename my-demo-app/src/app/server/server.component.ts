import { Component } from "@angular/core";

@Component({
    selector: 'app-serve',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    serverId:number=10;
    serverStatus: string="offline"

    getServerStatus(){
        return this.serverStatus;
    }
}