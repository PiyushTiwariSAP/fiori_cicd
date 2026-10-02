/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["modulewithoutdata/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
