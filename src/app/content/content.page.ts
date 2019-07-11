import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'our-content',
    templateUrl: './content.page.html',
    styleUrls: ['./content.page.scss']
})
export class ContentPage implements OnInit {

    content = '';

    constructor(
        private route: ActivatedRoute,
        private http: HttpClient,
    ) { }

    async ngOnInit() {

        this.route.fragment.subscribe(fragment => {
            console.log('Route fragment changed:', fragment);
        });

        this.route.url.subscribe(urls => {

            const contentPath = urls.length === 0 ? 'index' : urls.join('/');

            console.log('Content URLs changed:', contentPath);

            const url = `./assets/content/${contentPath}.json`;

            console.log('Route: ', this.route.toString());
            console.log('GET', url);
            this.http.get(url).subscribe((contentJson: any) => {

                console.log('New content', contentJson);

                if (!contentJson.contentType) {
                    this.content = `500 error: Unexpected content. Missing "contentType": ${contentPath}`;
                }

                if (!contentJson.content) {
                    this.content = `500 error: Failed to load ${contentPath}`;
                }

                this.content = contentJson.content;
            });
        });
    }

}
