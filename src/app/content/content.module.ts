import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CovalentMarkdownModule } from '@covalent/markdown';

import { ContentPage } from './content.page';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        CovalentMarkdownModule,
    ],
    declarations: [ContentPage]
})
export class ContentPageModule { }
