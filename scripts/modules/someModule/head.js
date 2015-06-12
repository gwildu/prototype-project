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