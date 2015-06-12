"use strict";
window.RIC = window.RIC || {};
RIC.orderTail = RIC.orderTail || [];

for(var i = 0; i < RIC.orderTail.length; i++) {
    var module = RIC.orderTail[i];
    if (typeof module === 'object' && typeof module.init === 'object' && typeof module.init.late === 'function') {
        module.init.late();
    }
}