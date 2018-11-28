import { Component, ChangeDetectionStrategy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  @ViewChild(CdkScrollable) scrollable: CdkScrollable;
  title = 'app';
  items = Array.from({length: 50}).map((_, i) => `Item #${i}`);
  constructor(private scrollDispatcher: ScrollDispatcher) {
  }

  ngOnInit() {
  }

  scrollDown() {
    const top = this.scrollable.measureScrollOffset('top');
    this.scrollable.scrollTo({
      top: top + 200
    });
  }


}
