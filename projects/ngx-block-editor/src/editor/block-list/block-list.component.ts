import { Component, OnInit } from '@angular/core';
// --------------------------------------------------------
import { NBE_BlockInterface } from '../../interfaces';

@Component({
    selector: 'nbe-block-list',
    templateUrl: './block-list.component.html',
    styleUrls: ['./block-list.component.scss']
  })
export class NBE_BlockListComponent implements OnInit {
  
    public blocks: NBE_BlockInterface[] = [{ content: '' }];

    // CONSTRUCTOR
    constructor() { }

    // IMPLEMENTS
    ngOnInit() { }
    
    // METHODS
    nextBlock(fromBlock: NBE_BlockInterface, fromBlockIndex: number) {
        if (this.isLastBlock(fromBlockIndex)) 
            this.appendBlock(fromBlock);
        else
            this.focusBlock(fromBlock, fromBlockIndex);
      }
    private appendBlock(fromBlock: NBE_BlockInterface) {
        this.blocks.push({ content: '' });
      }
    private focusBlock(fromBlock: NBE_BlockInterface, fromBlockIndex: number) {

      }

    // CONDITIONS
    isLastBlock = (blockIndex: number) => (blockIndex === (this.blocks.length - 1))
  }