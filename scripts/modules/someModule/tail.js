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