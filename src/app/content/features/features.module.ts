import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { PatreonComponent } from './patreon/patreon.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [
        PatreonComponent,
    ],
    exports: [
        PatreonComponent,
    ],
})
export class ContentFeaturesModule { }
