import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

/* tslint:disable */
import { CloudPage } from './cloud.page';
import { DevopsPage } from './devops.page';
import { IndexPage } from './index.page';
import { InternetOfThingsPage } from './internet-of-things.page';
import { MicroservicesPage } from './microservices.page';
import { PeoplePage } from './people.page';
import { ProcessPage } from './process.page';
import { RolesPage } from './roles.page';
import { ServerlessPage } from './serverless.page';
import { TechnologyPage } from './technology.page';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        RouterModule.forChild([
            { path: '', component: IndexPage },
            { path: 'cloud', component: CloudPage },
			{ path: 'devops', component: DevopsPage },
			{ path: 'index', component: IndexPage },
			{ path: 'internet-of-things', component: InternetOfThingsPage },
			{ path: 'microservices', component: MicroservicesPage },
			{ path: 'people', component: PeoplePage },
			{ path: 'process', component: ProcessPage },
			{ path: 'roles', component: RolesPage },
			{ path: 'serverless', component: ServerlessPage },
			{ path: 'technology', component: TechnologyPage },
        ]),
    ],
    declarations: [
        CloudPage,
		DevopsPage,
		IndexPage,
		InternetOfThingsPage,
		MicroservicesPage,
		PeoplePage,
		ProcessPage,
		RolesPage,
		ServerlessPage,
		TechnologyPage,
    ]
})
export class ContentModule { }
