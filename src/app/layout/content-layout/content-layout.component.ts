import { BreakpointObserver, Breakpoints, BreakpointState, MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnDestroy {
  private mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset);

  expanded: boolean = true;
  showing: boolean = false;
  tabs = ['Welcome'];
  selected = new FormControl(0);

  constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private breakpointObserver: BreakpointObserver) {
    this.mobileQuery = media.matchMedia('(max-width: 767px)');
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  mouseenter(): void {
    if (!this.expanded) {
      this.showing = true;
    }
  }

  mouseleave(): void {
    if (!this.expanded) {
      this.showing = false;
    }
  }

  addTab(tabNm: string) {
    this.tabs.push(tabNm);
    this.selected.setValue(this.tabs.length - 1);
  }

  removeTab(index: number) {
    if (index !== 0) {
      this.tabs.splice(index, 1);
    }
  }
}
