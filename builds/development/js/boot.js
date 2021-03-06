System.register(['angular2/platform/browser', './app.component', './main/grades.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, grades_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (grades_service_1_1) {
                grades_service_1 = grades_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.GrdCalcComponent, [
                grades_service_1.GradesService
            ]);
        }
    }
});

//# sourceMappingURL=boot.js.map
