import { Component, OnInit } from '@angular/core';

import { ContentService } from '../content.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    private CONTENT_FILE_NAME = 'ROLES.md';

    content = '... loading content ...';

    constructor(private contentService: ContentService) { }

    async ngOnInit() {

        if (!this.contentService) {
            throw new Error('Missing contentService');
        }

        this.content = await this.contentService.get(this.CONTENT_FILE_NAME);
    }
}
