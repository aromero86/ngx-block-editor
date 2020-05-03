import { Component, OnInit, HostListener, Output, EventEmitter, Input, ElementRef, ViewChild, SimpleChanges } from '@angular/core';
// --------------------------------------------------------
import { NBE_BlockInterface } from '../../interfaces';
import { NBE_BlockEditorConfigurationService } from '../../services';

@Component({
    selector: 'nbe-block-text',
    templateUrl: './block-text.component.html',
    styleUrls: ['./block-text.component.scss']
  })
export class NBE_BlockTextComponent {
  
    @Input() block: NBE_BlockInterface;
    @Output() nextBlock = new EventEmitter<NBE_BlockInterface>();
    @ViewChild('erContent') set set_erContent(element: ElementRef) {
        this.erContent = element;
        this.focus();
      }

    @HostListener('keypress', ['$event'])
    private handleKeyboardEvent(event: KeyboardEvent) { 
        if (event.keyCode === 13 && !event.shiftKey) {

            this.nextBlock.emit(this.block);
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();
          }
      }

    // ATTS
    private erContent: ElementRef;
    public content: string;

    // CONSTRUCTOR
    constructor(public configuration: NBE_BlockEditorConfigurationService) { }
    
    // IMPLEMENTS
    ngOnInit() {
        this.setContentFromBlock();
      }
    ngOnChanges(changes: SimpleChanges) {
        if (changes.block)
            this.setContentFromBlock();
      }

    // METHODS
    focus() {
        if (!this.erContent)
            return;
        setTimeout(() => this.erContent.nativeElement.focus());
      }
    setContentFromEditable() {
        this.block.content = this.erContent?.nativeElement.innerHTML;
      }
    private setContentFromBlock() {
        let currentContent: string = this.erContent?.nativeElement.innerHTML;
        if (this.block.content !== currentContent)
            this.content = this.block.content;
      }
  }