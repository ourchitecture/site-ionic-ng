import { Injectable, Output, EventEmitter } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root'
})
export class PwaService {

    @Output() beforeInstallPromptEvent: EventEmitter<any> = new EventEmitter();

    constructor(private swUpdate: SwUpdate) {

        this.swUpdate.available.subscribe(event => {
            console.log('[ourchitecture] sw.update.available()');
            if (this.askUserToUpdate()) {
                window.location.reload();
            }
        });

        window.addEventListener('beforeinstallprompt', (event) => {

            console.log('[ourchitecture] sw.beforeinstallprompt()');

            if (!event) {
                console.log('[ourchitecture] sw.beforeinstallprompt(): no event');
                return;
            }

            event.preventDefault();

            this.beforeInstallPromptEvent.emit(event);
        });
    }

    private askUserToUpdate() {
        return true;
    }
}
