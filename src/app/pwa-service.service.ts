import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root'
})
export class PwaService {

    public promptEvent;

    constructor(private swUpdate: SwUpdate) {

        swUpdate.available.subscribe(event => {
            if (this.askUserToUpdate()) {
                window.location.reload();
            }
        });

        window.addEventListener('beforeinstallprompt', event => {

            event.preventDefault();

            this.promptEvent = event;
        });
    }

    private askUserToUpdate() {
        return true;
    }
}
