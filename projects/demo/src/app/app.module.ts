import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxBlockEditorModule } from './../../../ngx-block-editor/src/ngx-block-editor.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxBlockEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
