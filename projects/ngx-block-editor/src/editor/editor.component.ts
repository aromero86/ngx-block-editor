import { Component, OnInit, Input, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'nbe-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
  })
export class NBE_EditorComponent implements OnInit, OnChanges {

    @Input() leftPadding: number = 40;
    @Input() rightPadding: number = 40;

    // CONSCTRUCTOR
    constructor(private elementRef: ElementRef, 
                private renderer: Renderer2) { }

    // IMPLEMENTS
    ngOnInit() {
        this.applyPadding();
      }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.leftPadding || changes.rightPadding)
            this.applyPadding();
      }

    // METHODS
    private applyPadding() {
        this.renderer.setStyle(this.elementRef.nativeElement, 'padding-left', `${ this.leftPadding }px` );
        this.renderer.setStyle(this.elementRef.nativeElement, 'padding-right', `${ this.rightPadding }px` );
      }
  }