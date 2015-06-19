"use strict";
window.RIC = window.RIC || {};
RIC.orderHead = RIC.orderHead || [];

RIC.someModule = (function(self, window, $, undefined){
    RIC.orderHead.push(self);

    var tempSelf = {
        init: {
            immediate: function() {
                console.log('someModule - immediate');
            },

            early: function() {
                console.log('someModule - early')
            }
        }
    };

    return $.extend(self, tempSelf);

})(RIC.someModule || {}, window, jQuery);
RIC.someModule.init.immediate();