"use strict";
window.RIC = window.RIC || {};
RIC.orderHead = RIC.orderHead || [];

RIC.someModule = (function(self, window, $, undefined){
    RIC.orderHead.push(self);

    self.init = {};

    self.init.immediate = function(){
        console.log('someModule - immediate');
    };

    self.init.early = function(){
        console.log('someModule - early');
    };

    return self;
})(RIC.someModule || {}, window, jQuery);
RIC.someModule.init.immediate();
"use strict";
window.RIC = window.RIC || {};
RIC.orderHead = RIC.orderHead || [];

RIC.someOtherModule = (function(self){
    RIC.orderHead.push(self);
    self.init = {};
    self.init.immediate = function(){
        console.log('someOtherModule - immediate');
    };
    self.init.early = function(){
        console.log('someOtherModule - early');
    };
    return self;
})(RIC.someOtherModule || {});
RIC.someOtherModule.init.immediate();
"use strict";
window.RIC = window.RIC || {};
RIC.orderHead = RIC.orderHead || [];

for(var i = 0; i < RIC.orderHead.length; i++) {
    var module = RIC.orderHead[i];
    if (typeof module === 'object' && typeof module.init === 'object' && typeof module.init.early === 'function') {
        module.init.early();
    }
}