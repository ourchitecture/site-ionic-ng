import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
        private router: Router,
        private pwa: PwaService,
        private toaster: ToastController,
        private title: Title,
    ) {
        this.initializeApp();
    }

    initializeApp() {

        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

        this.router.events.subscribe((event) => {

            if (event instanceof NavigationEnd) {

                const navEndEvent = event as NavigationEnd;

                const currentPageTitle = this.title.getTitle();

                let pageTitle = currentPageTitle;

                const titleElements = document.getElementsByTagName('ion-title');

                if (titleElements.length > 0) {
                    pageTitle = titleElements[0].textContent;
                    this.title.setTitle(pageTitle);
                }

                const pageViewData = {
                    page_title: pageTitle,
                    page_path: navEndEvent.urlAfterRedirects,
                };

                console.log('Sending page view to GA', pageViewData);

                (window as any).gtag('config', 'UA-144592331-1', {
                    page_title: pageTitle,
                    page_path: navEndEvent.urlAfterRedirects,
                });
            }
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
