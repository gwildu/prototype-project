"use strict";
window.RIC = window.RIC || {};
RIC.orderTail = RIC.orderTail || [];

RIC.someModule = (function(self){
    RIC.orderTail.push(self);

    var tempSelf = {
        init: {
            late: function() {
                console.log('someModule - late');
                console.log(document.body);
                console.log($('body'));

            }
        }
    };

    return $.extend(self, tempSelf);

})(RIC.someModule || {});