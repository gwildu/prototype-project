"use strict";
window.RIC = window.RIC || {};
RIC.orderHead = RIC.orderHead || [];

RIC.someOtherModule = (function(self){
    RIC.orderHead.push(self);

    var tempSelf = {
        init: {
            immediate: function() {
                console.log('someOtherModule - immediate');
            },
            early: function() {
                console.log('someOtherModule - early');
            }
        }
    };

    return $.extend(self, tempSelf);

})(RIC.someOtherModule || {});
RIC.someOtherModule.init.immediate();