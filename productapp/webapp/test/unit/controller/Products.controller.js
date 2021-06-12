/*global QUnit*/

sap.ui.define([
	"comsap./productapp/controller/Products.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Products Controller");

	QUnit.test("I should test the Products controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
