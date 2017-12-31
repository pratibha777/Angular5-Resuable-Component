import { Component, ElementRef, EventEmitter, Input, OnInit, HostListener} from '@angular/core';
import { Inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW_PROVIDERS, WINDOW } from "../window.service";

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() content: string;
  placement: string = "tooltipAbove";

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
    ){}

    ngOnInit() {
  }

  @HostListener("window:scroll", [])
  onWindowScroll(this) {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if(offset > 100)
    {
      this.placement="tooltipBelow";
      console.log(offset); 
    }
  }
}
