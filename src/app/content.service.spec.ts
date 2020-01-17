import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ContentService } from './content.service';

describe('Service: Content', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ContentService]
        });
    });

    it('should be created', inject([ContentService], (service: ContentService) => {
        expect(service).toBeTruthy();
    }));
});
