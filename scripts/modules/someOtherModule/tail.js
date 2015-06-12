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