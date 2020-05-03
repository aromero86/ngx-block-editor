import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NBE_EditorComponent } from './editor/editor.component';

@NgModule({
    imports: [
        CommonModule
      ],
    exports: [
        NBE_EditorComponent
      ],
    declarations: [
        NBE_EditorComponent
      ],
    providers: [],
  })
export class NgxBlockEditorModule { }
