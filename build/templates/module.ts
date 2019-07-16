import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

/* tslint:disable */
${angularModuleImports}

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([
            { path: '', component: IndexPage },
            ${angularModuleRoutes},
        ]),
    ],
    declarations: [
        ${angularModuleDeclarations},
    ]
})
export class ContentModule { }
