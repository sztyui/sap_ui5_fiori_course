sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onInit: function () {},
      onShowHello: function () {
        // show a MessageToast
        MessageToast.show(
          this.getView()
            .getModel("i18n")
            .getResourceBundle()
            .getText("helloMsg", [
              this.getView().getModel().getProperty("/recipient/name"),
            ])
        );
      },
    });
  }
);
