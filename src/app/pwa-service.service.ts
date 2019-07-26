import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Injectable()
export class PwaService {

    public promptEvent;

    constructor(private swUpdate: SwUpdate) {

        swUpdate.available.subscribe(event => {
            if (this.askUserToUpdate()) {
                window.location.reload();
            }
        });

        window.addEventListener('beforeinstallprompt', event => {
            this.promptEvent = event;
        });
    }

    private askUserToUpdate() {
        return true;
    }
}
