import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { PwaService } from './pwa-service.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private pwa: PwaService,
        private toaster: ToastController,
    ) {
        this.initializeApp();
    }

    initializeApp() {

        this.platform.ready().then(() => {

            this.statusBar.styleDefault();
            this.splashScreen.hide();

            console.log('[ourchitecture] platform.ready(): PWA prompt event?', this.pwa.promptEvent ? true : false);

            if (this.pwa.promptEvent) {
                this.toaster.create({
                    header: 'Ourchitecture Application',
                    message: 'Install this application?',
                    position: 'top',
                    showCloseButton: true,
                    translucent: true,
                    buttons: [
                        {
                            side: 'start',
                            icon: 'star',
                            text: 'Yes',
                            handler: () => {
                                console.log('[ourchitecture] PWA installing...');
                                this.pwa.promptEvent.prompt();
                            }
                        }, {
                            text: 'No',
                            role: 'cancel',
                            handler: () => {
                                console.log('[ourchitecture] PWA install cancelled');
                            }
                        }
                    ],
                }).then((toast) => {
                    console.log('[ourchitecture] PWA prompting for install...');
                    toast.present();
                });
            }
        });
    }
}
