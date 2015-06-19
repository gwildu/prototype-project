"use strict";
window.RIC = window.RIC || {};
RIC.orderTail = RIC.orderTail || [];

RIC.someOtherModule = (function(self){
    RIC.orderTail.push(self);

    var tempSelf = {
        init: {
            late: function() {
                console.log('someOtherModule - late');
            }
        }
    };

    return $.extend(self, tempSelf);

})(RIC.someOtherModule || {});