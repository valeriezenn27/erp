import { Component, Input } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  @Input() isExpanded: boolean = true;
  @Input() isShowing: boolean = false;

  menus = environment.menus;

  showOrderSubMenu: boolean = false;
  showPayrollSubMenu: boolean = false;
  showProcurementSubMenu: boolean = false;
  showProductionSubMenu: boolean = false;
  showReportSubMenu: boolean = false;

  showSubSubMenu: boolean = false;

  showSubMenu(parentMenu: string): void {
    if (parentMenu === 'Order') {
      this.showOrderSubMenu = !this.showOrderSubMenu;
    } else if (parentMenu === 'Payroll') {
      this.showPayrollSubMenu = !this.showPayrollSubMenu;
    } else if (parentMenu === 'Procurement') {
      this.showProcurementSubMenu = !this.showProcurementSubMenu;
    } else if (parentMenu === 'Production') {
      this.showProductionSubMenu = !this.showProductionSubMenu;
    } else if (parentMenu === 'Reports') {
      this.showReportSubMenu = !this.showReportSubMenu;
    }
  }

}
