import { NgModule } from '@angular/core';

import { ContentFeaturesModule } from './features/features.module';
import { ContentPagesModule } from './pages/pages.module';

@NgModule({
    imports: [
        ContentFeaturesModule,
        ContentPagesModule,
    ],
    exports: [
        ContentFeaturesModule,
        ContentPagesModule,
    ],
})
export class ContentModule { }
