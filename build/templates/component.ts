import { Component } from '@angular/core';

/* tslint:disable */
@Component({
    selector: '${angularComponentSelector}',
    styleUrls: ['content.scss'],
    template: `<ion-header>
    <ion-toolbar>
        <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>
            <a routerLink="/">Ourchitecture</a>
        </ion-title>
        <ion-buttons slot="end">
            <ion-button fill="solid" href="https://github.com/ourchitecture">
                <ion-icon slot="end" name="logo-github"></ion-icon>
                GitHub
            </ion-button>
        </ion-buttons>
    </ion-toolbar>
</ion-header>

<ion-content>
    <div class="ion-padding">
${content}
    </div>
</ion-content>`,
})
export class ${angularComponentName} {}
