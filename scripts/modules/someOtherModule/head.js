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