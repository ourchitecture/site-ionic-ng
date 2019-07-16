import { Component } from '@angular/core';

/* tslint:disable */
@Component({
    selector: '${angularComponentSelector}',
    template: `<ion-header>
<ion-toolbar>
<ion-buttons slot="start">
    <ion-back-button></ion-back-button>
</ion-buttons>
<ion-title>
    Ourchitecture
</ion-title>
</ion-toolbar>
</ion-header>

<ion-content>
<div class="ion-padding">
${content}
</div>
</ion-content>`,
})
export class ${angularComponentName} {}
