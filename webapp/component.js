sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest: "json",
      },
      init: function () {
        // create JSON model instance
        UIComponent.prototype.init.apply(this, arguments);
        const oData = {
          recipient: {
            name: "UI5",
          },
        };
        const oModel = new JSONModel(oData);
        // set model to the view
        this.setModel(oModel);
      },
    });
  }
);
