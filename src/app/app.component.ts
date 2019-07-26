import { Component, OnInit } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { PwaService } from './pwa-service.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

    private promptEvent;

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
        });
    }

    ngOnInit() {

        this.pwa.beforeInstallPromptEvent.subscribe((promptEvent) => {

            this.promptEvent = promptEvent;

            console.log('[ourchitecture] PWA prompt event, displaying toast...');

            this.toaster.create({
                header: 'Ourchitecture',
                message: 'Install this application?',
                position: 'top',
                showCloseButton: false,
                translucent: true,
                buttons: [
                    {
                        icon: 'home',
                        text: 'Yes',
                        handler: () => {
                            console.log('[ourchitecture] PWA installing...');
                            this.promptEvent.prompt();
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
        });
    }
}
