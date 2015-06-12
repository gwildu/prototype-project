"use strict";
window.RIC = window.RIC || {};
RIC.orderHead = RIC.orderHead || [];

for(var i = 0; i < RIC.orderHead.length; i++) {
    var module = RIC.orderHead[i];
    if (typeof module === 'object' && typeof module.init === 'object' && typeof module.init.early === 'function') {
        module.init.early();
    }
}