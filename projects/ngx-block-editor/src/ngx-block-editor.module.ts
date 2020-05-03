import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --------------------------------------------------------
import { NBE_EditorComponent } from './editor/editor.component';
import { NBE_BlockListComponent } from './editor/block-list/block-list.component';

@NgModule({
    imports: [
        CommonModule
      ],
    exports: [
        NBE_EditorComponent
      ],
    declarations: [
        NBE_EditorComponent,
        NBE_BlockListComponent
      ],
    providers: [],
  })
export class NgxBlockEditorModule { }

export { NBE_EditorComponent } from './editor/editor.component';