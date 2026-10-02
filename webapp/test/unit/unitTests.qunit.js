/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require([
    "modulewithoutdata/test/unit/AllTests"
], function () {
    "use strict";

    QUnit.start();
});