var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var DnDOriginal = /** @class */ (function (_super) {
    __extends(DnDOriginal, _super);
    function DnDOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DnDOriginal.prototype.on = function (arg1) { return cordova(this, "on", {}, arguments); };
    DnDOriginal.prototype.off = function (arg1) { return cordova(this, "off", {}, arguments); };
    DnDOriginal.prototype.alarm = function (arg1) { return cordova(this, "alarm", {}, arguments); };
    DnDOriginal.prototype.priority = function (arg1) { return cordova(this, "priority", {}, arguments); };
    DnDOriginal.pluginName = "DnD";
    DnDOriginal.plugin = "io.electrosoft.dnd";
    DnDOriginal.pluginRef = "cordova.plugins.DnD";
    DnDOriginal.repo = "https://github.com/martinchuka/cordova-plugin-dnd";
    DnDOriginal.platforms = ["Android"];
    return DnDOriginal;
}(IonicNativePlugin));
var DnD = new DnDOriginal();
export { DnD };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2RuLWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLE9BQU8sOEJBQTBGLE1BQU0sb0JBQW9CLENBQUM7O0lBV25HLHVCQUFpQjs7OztJQUd4QyxnQkFBRSxhQUFDLElBQVk7SUFJZixpQkFBRyxhQUFDLElBQVk7SUFJaEIsbUJBQUssYUFBQyxJQUFZO0lBSWxCLHNCQUFRLGFBQUMsSUFBWTs7Ozs7O2NBNUJ2QjtFQWF5QixpQkFBaUI7U0FBN0IsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0RuRCcsXG4gIHBsdWdpbjogJ2lvLmVsZWN0cm9zb2Z0LmRuZCcsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5EbkQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcnRpbmNodWthL2NvcmRvdmEtcGx1Z2luLWRuZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRG5EIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgb24oYXJnMTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgQENvcmRvdmEoKVxuICBvZmYoYXJnMTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgQENvcmRvdmEoKVxuICBhbGFybShhcmcxOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICBAQ29yZG92YSgpXG4gIHByaW9yaXR5KGFyZzE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==