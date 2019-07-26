import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root'
})
export class PwaService {

    public promptEvent;

    constructor(private swUpdate: SwUpdate) {

        this.swUpdate.available.subscribe(event => {
            console.log('[ourchitecture] sw.update.available()');
            if (this.askUserToUpdate()) {
                window.location.reload();
            }
        });

        window.addEventListener('beforeinstallprompt', event => {

            console.log('[ourchitecture] sw.beforeinstallprompt()');

            event.preventDefault();

            this.promptEvent = event;
        });
    }

    private askUserToUpdate() {
        return true;
    }
}
