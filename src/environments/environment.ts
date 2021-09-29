// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  menus: [
    { title: 'Dashboard', icon: 'dashboard', route: '/erp' },
    { title: 'Order', icon: 'build', route: '/erp/order' },
    { title: 'Payroll', icon: 'monetization_on', route: '/erp/payroll' },
    { title: 'Procurement', icon: 'inventory', route: '/erp/procurement' },
    { title: 'Production', icon: 'inventory_2', route: '/erp/production' },
    { title: 'Reports', icon: 'summarize', route: '/erp/reports' }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
