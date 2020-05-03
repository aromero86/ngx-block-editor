import { TestBed } from '@angular/core/testing';

import { NgxBlockEditorService } from './ngx-block-editor.service';

describe('NgxBlockEditorService', () => {
  let service: NgxBlockEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBlockEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
