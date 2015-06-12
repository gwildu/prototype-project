"use strict";
window.RIC = window.RIC || {};
RIC.orderTail = RIC.orderTail || [];

RIC.someModule = (function(self){
    RIC.orderTail.push(self);

    self.init = self.init || {};
    self.init.late = function(){
        console.log('someModule - late');
        console.log(document.body);
        console.log($('body'));
    };
    return self;
})(RIC.someModule || {});
"use strict";
window.RIC = window.RIC || {};
RIC.orderTail = RIC.orderTail || [];

RIC.someOtherModule = (function(self){
    RIC.orderTail.push(self);
    self.init = self.init || {};
    self.init.late = function(){
        console.log('someOtherModule - late');
    };
    return self;
})(RIC.someOtherModule || {});
"use strict";
window.RIC = window.RIC || {};
RIC.orderTail = RIC.orderTail || [];

for(var i = 0; i < RIC.orderTail.length; i++) {
    var module = RIC.orderTail[i];
    if (typeof module === 'object' && typeof module.init === 'object' && typeof module.init.late === 'function') {
        module.init.late();
    }
}