/* eslint-disable */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ContentFeaturesModule } from '../features/features.module';

${angularModuleImports}

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ContentFeaturesModule,
        RouterModule.forChild([
            { path: '', component: IndexPage },
            ${angularModuleRoutes},
        ]),
    ],
    declarations: [
        ${angularModuleDeclarations},
    ],
})
export class ContentPagesModule { }
