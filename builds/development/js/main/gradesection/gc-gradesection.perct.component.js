System.register(['angular2/core', '../grades.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, grades_service_1;
    var GradeSectionPercTComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (grades_service_1_1) {
                grades_service_1 = grades_service_1_1;
            }],
        execute: function() {
            GradeSectionPercTComponent = (function () {
                function GradeSectionPercTComponent(gradeService) {
                    this.gradeService = gradeService;
                    this.value = new core_1.EventEmitter();
                }
                GradeSectionPercTComponent.prototype.changePerc = function (e) {
                    var perc = parseFloat(e.target.value);
                    this.value.emit(perc);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], GradeSectionPercTComponent.prototype, "perc", void 0);
                __decorate([
                    core_1.Output('percentchange'), 
                    __metadata('design:type', Object)
                ], GradeSectionPercTComponent.prototype, "value", void 0);
                GradeSectionPercTComponent = __decorate([
                    core_1.Component({
                        selector: 'grade-section-perct',
                        templateUrl: 'partials/main/gradesection/gc-gradesectionperct.html',
                        directives: [],
                    }), 
                    __metadata('design:paramtypes', [grades_service_1.GradesService])
                ], GradeSectionPercTComponent);
                return GradeSectionPercTComponent;
            }());
            exports_1("GradeSectionPercTComponent", GradeSectionPercTComponent);
        }
    }
});

//# sourceMappingURL=gc-gradesection.perct.component.js.map
