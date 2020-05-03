import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// --------------------------------------------------------
import { NBE_BlockEditorConfigurationService } from './services';
// --------------------------------------------------------
import { NBE_EditorComponent } from './editor/editor.component';
import { NBE_BlockListComponent } from './editor/block-list/block-list.component';
import { NBE_BlockTextComponent } from './blocks/text/block-text.component';

@NgModule({
    imports: [
        CommonModule
      ],
    exports: [
        NBE_EditorComponent
      ],
    declarations: [
        NBE_EditorComponent,
        NBE_BlockListComponent,
        NBE_BlockTextComponent,
      ],
    providers: [
        NBE_BlockEditorConfigurationService
      ]
  })
export class NgxBlockEditorModule { }

export { NBE_EditorComponent } from './editor/editor.component';