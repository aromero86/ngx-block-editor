import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBlockEditorComponent } from './ngx-block-editor.component';

describe('NgxBlockEditorComponent', () => {
  let component: NgxBlockEditorComponent;
  let fixture: ComponentFixture<NgxBlockEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxBlockEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxBlockEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
