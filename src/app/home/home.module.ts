import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CovalentMarkdownModule } from '@covalent/markdown';

import { HomePage } from './home.page';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        CovalentMarkdownModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ])
    ],
    declarations: [HomePage]
})
export class HomePageModule { }
